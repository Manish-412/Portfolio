import { useEffect, useRef, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState("");
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (!sectionIds.length) return;

    const ratios = ratiosRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let nextId = "";
        let maxRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextId = id;
          }
        });

        setActiveId(maxRatio > 0 ? nextId : "");
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.1, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      observer.observe(element);
      ratios.set(id, 0);
    });

    return () => {
      observer.disconnect();
      ratios.clear();
    };
  }, [sectionIds]);

  return activeId;
}
