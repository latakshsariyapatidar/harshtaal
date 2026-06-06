class WebAudioEngine {
  private static instance: WebAudioEngine;
  private context: AudioContext | null = null;
  private buffers: Map<string, AudioBuffer> = new Map();
  private loading: Map<string, Promise<AudioBuffer>> = new Map();

  private constructor() {
    // Lazy initialization
  }

  public static getInstance(): WebAudioEngine {
    if (!WebAudioEngine.instance) {
      WebAudioEngine.instance = new WebAudioEngine();
    }
    return WebAudioEngine.instance;
  }

  private getContext(): AudioContext {
    if (!this.context) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.context = new AudioContextClass();
    }
    if (this.context.state === 'suspended') {
      this.context.resume().catch((err) => {
        console.warn("Failed to resume AudioContext:", err);
      });
    }
    return this.context;
  }

  public async preload(src: string): Promise<AudioBuffer> {
    if (this.buffers.has(src)) {
      return this.buffers.get(src)!;
    }
    if (this.loading.has(src)) {
      return this.loading.get(src)!;
    }

    const promise = (async () => {
      try {
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        const ctx = this.getContext();
        // Modern decodeAudioData returns a Promise
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
        this.buffers.set(src, audioBuffer);
        return audioBuffer;
      } catch (error) {
        console.error(`Failed to load audio: ${src}`, error);
        throw error;
      } finally {
        this.loading.delete(src);
      }
    })();

    this.loading.set(src, promise);
    return promise;
  }

  public async play(src: string, volume: number = 0.5) {
    try {
      const ctx = this.getContext();
      let buffer = this.buffers.get(src);
      if (!buffer) {
        buffer = await this.preload(src);
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(volume, ctx.currentTime);

      source.connect(gainNode);
      gainNode.connect(ctx.destination);

      source.start(0);
    } catch (error) {
      console.warn("WebAudioEngine: Playback failed, trying fallback", error);
      this.fallbackPlay(src, volume);
    }
  }

  private fallbackPlay(src: string, volume: number) {
    try {
      const audio = new Audio(src);
      audio.volume = volume;
      audio.play().catch(err => console.debug("Fallback audio failed:", err));
    } catch (e) {
      console.debug("Fallback audio constructor failed:", e);
    }
  }
}

export const audioEngine = WebAudioEngine.getInstance();
