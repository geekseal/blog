import { debounce } from "@/lib/debounce";
import { ReactNode, useEffect, useRef } from "react";

export const WidthResizeTransition = ({
  children,
}: {
  children: ReactNode;
}) => {
  const targetElement = useRef<HTMLDivElement>(null);

  window.addEventListener(
    "resize",
    debounce(() => {
      if (targetElement.current) {
        targetElement.current.style.width = `${window.innerWidth}px`;
      }
    }, 800),
  );
  useEffect(() => {
    if (targetElement.current) {
      targetElement.current.style.width = `${window.innerWidth}px`;
    }
  }, []);
  return (
    <div
      ref={targetElement}
      className="transition-[width] duration-500 ease delay-200"
    >
      {children}
    </div>
  );
};
