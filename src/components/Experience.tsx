import { Card } from "@mui/material";
// import React from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences: any[] = [
    {
      title: "Software Engineer II",
      company: "Verizon",
      duration: "09/2023 - Now",
      description:
        "Worked as a full stack developer\nTech Stack : Java, Spring Boot, React, Postgres\n...",
    },
    {
      title: "Software Engineer",
      company: "Optum",
      duration: "05/2022 - 08/2023",
      description:
        "Worked as a full stack developer\nTech Stack : Java 8, Spring Boot, Angular, Postgres\n...\n",
    },
    // { title: "Software Engineer", company: "", duration: "", description: "" },
  ];

  return (
    <>
      <Card sx={{ minHeight: "100%", border: "none", boxShadow: "none" }}>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </Card>
    </>
  );
}

export default Experience;
