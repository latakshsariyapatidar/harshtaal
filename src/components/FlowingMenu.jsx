import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

// ponytail: native Audio API used instead of custom audioEngine wrapper
const CLICK_SOUND_URL = 'https://res.cloudinary.com/db69ffwwa/video/upload/v1780758820/click_oht7gg.mp3';



























const FlowingMenu = ({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#120F17',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#120F17',
  borderColor = '#fff'
}) => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg" style={{ backgroundColor: bgColor }}>
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) =>
        <MenuItem
        key={idx}
        {...item}
        speed={speed}
        textColor={textColor}
        marqueeBgColor={marqueeBgColor}
        marqueeTextColor={marqueeTextColor}
        borderColor={borderColor}
        isFirst={idx === 0} />)}


      </nav>
    </div>);

};

const MenuItem = ({
  link,
  text,
  image,
  description,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst
}) => {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text, image, description]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, description, repetitions, speed]);

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);


    const audio = new Audio(CLICK_SOUND_URL);
    audio.volume = 0.2;
    audio.play().catch(() => {});

    gsap.
    timeline({ defaults: animationDefaults }).
    set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0).
    set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0).
    to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap.
    timeline({ defaults: animationDefaults }).
    to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0).
    to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div
    className="flex-1 relative overflow-hidden text-center flex flex-col justify-center"
    ref={itemRef}
    style={{ borderTop: isFirst ? 'none' : `1px solid ${borderColor}` }}>

      <a
      className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-[3.2vh] md:text-[4.5vh]"
      href={link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: textColor, fontFamily: "'Josefin Sans', sans-serif" }}>

        {text}
      </a>
      <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%]"
      ref={marqueeRef}
      style={{ backgroundColor: marqueeBgColor }}>

        <div className="h-full w-fit flex" ref={marqueeInnerRef}>
          {[...Array(repetitions)].map((_, idx) =>
          <div className="marquee-part flex items-center flex-shrink-0" key={idx} style={{ color: marqueeTextColor }}>
              <span
            className="whitespace-nowrap uppercase font-light text-[2.5vh] md:text-[3vh] leading-[1] px-[1vw]"
            style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

                {description || text}
              </span>
              {image &&
            <div
            className="w-[180px] h-[5.5vh] my-[1em] mx-[1.5vw] rounded-[40px] bg-cover bg-center border border-white/10"
            style={{ backgroundImage: `url(${image})` }} />}


            </div>)}

        </div>
      </div>
    </div>);

};

export default FlowingMenu;