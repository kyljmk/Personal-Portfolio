import TechStackCard from "./TechStackCard";
import "../styles/TechStack.css";

function TechStack({ darkMode }) {
  const techArray1 = [
    { key: 1, title: "HTML", image: "html.png", alt: "html 5 logo" },
    { key: 2, title: "CSS", image: "css.png", alt: "css 3 logo" },
    { key: 3, title: "React", image: "react.png", alt: "react logo" },
    { key: 4, title: "C#", image: "csharp.png", alt: "c sharp logo" },
  ];

  const techArray2 = [
    { key: 1, title: ".NET Core", image: "net.png", alt: "dot net core logo" },
    { key: 2, title: "GitHub", image: "github.png", alt: "git hub logo" },
    {
      key: 3,
      title: "SQL Server",
      image: "sqlserver.png",
      alt: "sql server logo",
    },
  ];

  const firstRowTech = techArray1.map((tech) => {
    return (
      <TechStackCard
        title={tech.title}
        image={tech.image}
        alt={tech.alt}
        darkMode={darkMode}
      />
    );
  });

  const secondRowTech = techArray2.map((tech) => {
    return (
      <TechStackCard
        title={tech.title}
        image={tech.image}
        alt={tech.alt}
        darkMode={darkMode}
      />
    );
  });
  return (
    <div className="techstack">
      <h2 className={`techstack--title${darkMode ? "-dark" : ""}`}>My Tools</h2>
      <div className="techstack--firstrow">{firstRowTech}</div>
      <div className="techstack--secondrow">{secondRowTech}</div>
    </div>
  );
}

export default TechStack;
