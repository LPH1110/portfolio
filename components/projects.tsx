"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Fragment } from "react";
import ProjectCard from "./projectCard";
import SectionHeading from "./sectionHeading";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading align="center">Projects</SectionHeading>
      <div className="flex flex-col gap-4">
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <ProjectCard {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
