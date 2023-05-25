import { RefObject, useEffect, useState } from 'react';

export function useMouseHover(ref: RefObject<HTMLElement>): boolean {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  useEffect(() => {
    ref.current?.addEventListener('mouseenter', handleMouseEnter);
    ref.current?.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      ref.current?.removeEventListener('mouseenter', handleMouseEnter);
      ref.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return isHovered;
}
