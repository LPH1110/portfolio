import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ActiveSectionContext } from "@/context/activeSectionContext";
import { SectionName } from "./types";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { timeOfLastClick, setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSection Context hook must be used in ActiveSectionProvider"
    );
  }

  return context;
};
