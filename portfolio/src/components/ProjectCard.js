function ProjectCard({ projectsArray }) {
  projectsArray.sort((a, b) => {
    let da = new Date(a.updated_at),
      db = new Date(b.updated_at);
    return db - da;
  });

  const renderedProjects = projectsArray.map((x) => {
    const imgSrc = "./" + x.name + ".png";
    const alt = "A preview of " + x.name;

    return (
      <div className="projectcard">
        <h3 className="projectcard--title">{x.name}</h3>
        <p>{x.description}</p>
        <button>GitHub Link</button>
        <button></button>
        <img className="projectcard--image" src={imgSrc} alt={alt} />
      </div>
    );
  });
  return <div>{renderedProjects}</div>;
}

export default ProjectCard;
