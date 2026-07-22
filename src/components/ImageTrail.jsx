import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

// ponytail: unused ImageTrail variants 2-8 removed (YAGNI). Upgrade path: re-add variants if user requests different trail styles.

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0,
    clientY = 0;
  if ('touches' in e && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ('clientX' in e) {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = {
    el: null,
    inner: null
  };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
    this.getRect();
    this.initEvents();
  }

  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant1 {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map((img) => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const target = container.parentElement || container;

    const handlePointerMove = (ev) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    target.addEventListener('mousemove', handlePointerMove);
    target.addEventListener('touchmove', handlePointerMove);

    const initRender = (ev) => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      target.removeEventListener('mousemove', initRender);
      target.removeEventListener('touchmove', initRender);
    };
    target.addEventListener('mousemove', initRender);
    target.addEventListener('touchmove', initRender);
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.
    timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    }).
    fromTo(
    img.DOM.el,
    {
      opacity: 1,
      scale: 1,
      zIndex: this.zIndexVal,
      x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
      y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2
    },
    {
      duration: 0.4,
      ease: 'power1',
      x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
      y: this.mousePos.y - (img.rect?.height ?? 0) / 2
    },
    0).

    to(
    img.DOM.el,
    {
      duration: 0.4,
      ease: 'power3',
      opacity: 0,
      scale: 0.2
    },
    0.4);

  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

export default function ImageTrail({ items = [], size = 60 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    new ImageTrailVariant1(containerRef.current);
  }, [items]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[10] overflow-hidden" ref={containerRef}>
      {items.map((url, i) =>
      <div
      className="content__img absolute top-0 left-0 opacity-0 overflow-hidden [will-change:transform,filter]"
      style={{ width: `${size}px`, height: `${size}px` }}
      key={i}>

          <div
        className="content__img-inner bg-center bg-contain bg-no-repeat w-full h-full absolute top-0 left-0"
        style={{ backgroundImage: `url(${url})` }} />

        </div>)}

    </div>);
}