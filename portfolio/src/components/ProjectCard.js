function ProjectCard({ projectsArray }) {
  projectsArray.sort((a, b) => {
    let da = new Date(a.updated_at),
      db = new Date(b.updated_at);
    return db - da;
  });

  const renderedProjects = projectsArray.map((x) => {
    const filteredName = x.name.slice(0, -2);

    const imgSrc = "./" + filteredName + ".png";
    const alt = "A preview of " + filteredName;

    return (
      <div className="projectcard">
        <div className="projectcard--text">
          <h3 className="projectcard--title">{filteredName}</h3>
          <p className="projectcard--desription">{x.description}</p>
          <div className="projectcard--buttons">
            <a href={x.html_url}>
              <button>GitHub Link</button>
            </a>
            <button>Live Demo</button>
          </div>
        </div>
        <img className="projectcard--image" src={imgSrc} alt={alt} />
      </div>
    );
  });
  return <div>{renderedProjects}</div>;
}

export default ProjectCard;
