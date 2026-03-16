import { useRef } from "react";
import { SWIPE_THRESHOLD } from "../config";

export function useSwipe(onNext: () => void, onPrev: () => void) {
  const touchStartX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;
    dx < 0 ? onNext() : onPrev();
  };

  const onTouchCancel = () => {
    touchStartX.current = null;
  };

  return { onTouchStart, onTouchEnd, onTouchCancel };
}
