import { useEffect, useState } from 'react';

type TScrollPosition = {
  currentPos: number;
  maxPos: number;
  percent: number;
};

export function useScrollPosition(): TScrollPosition {
  const [scrollPos, setScrollPos] = useState<number>(window.scrollY);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const scrollHeight = document.scrollingElement?.scrollHeight ?? 0;
  const clientHeight = document.scrollingElement?.clientHeight ?? 0;
  const maxScrollPos = scrollHeight - clientHeight;

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const scrollPercent = Math.round((scrollPos / maxScrollPos) * 100);
    setScrollPercent(scrollPercent);
  }, [scrollPos]);

  return {
    currentPos: scrollPos,
    maxPos: maxScrollPos,
    percent: scrollPercent
  };
}
