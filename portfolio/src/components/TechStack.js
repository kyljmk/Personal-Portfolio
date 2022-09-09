import TechStackCard from "./TechStackCard";

const techArray = [
  { title: "HTML", image: "" },
  { title: "CSS", image: "" },
  { title: "React", image: "" },
  { title: "C#", image: "" },
  { title: ".NET", image: "" },
  { title: "GitHub", image: "" },
  { title: "SQLServer", image: "" },
];

const techStackArray = techArray.map((tech) => {
  return <TechStackCard title={tech.title} image={tech.image} />;
});

function TechStack() {
  return (
    <div>
      <h2>My Tools</h2>
      <div>{techStackArray}</div>
    </div>
  );
}

export default TechStack;
