import { useEffect, useCallback, useRef } from "react";

interface Options {
  total: number;
  current: number;
  onChange: (index: number) => void;
  loop?: boolean;
  enabled?: boolean;
}

export const useCarouselKeyboard = ({
  total,
  current,
  onChange,
  loop = true,
  enabled = true,
}: Options) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!enabled) return;

      const tag = (e.target as HTMLElement).tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp": {
          e.preventDefault();
          const prev = current > 0 ? current - 1 : loop ? total - 1 : 0;
          if (prev !== current) onChange(prev);
          break;
        }
        case "ArrowRight":
        case "ArrowDown": {
          e.preventDefault();
          const next = current < total - 1 ? current + 1 : loop ? 0 : total - 1;
          if (next !== current) onChange(next);
          break;
        }
        case "Home": {
          e.preventDefault();
          if (current !== 0) onChange(0);
          break;
        }
        case "End": {
          e.preventDefault();
          if (current !== total - 1) onChange(total - 1);
          break;
        }
      }
    },
    [total, current, onChange, loop, enabled],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !enabled) return;

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown, enabled]);

  return { containerRef };
};
