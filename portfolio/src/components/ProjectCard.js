function ProjectCard({ projectsArray, darkMode }) {
  projectsArray.sort((a, b) => {
    let da = new Date(a.updated_at),
      db = new Date(b.updated_at);
    return db - da;
  });

  const renderedProjects = projectsArray.map((x) => {
    const filteredName = x.name.slice(0, -2);

    const imgSrc = "./" + filteredName + ".png";
    const alt = "A preview of " + filteredName;

    const demoLink = x.description.split("%")[1];
    console.log(demoLink);
    return (
      <div className={`projectcard${darkMode ? "-dark" : ""}`}>
        <div className="projectcard--text">
          <h3 className="projectcard--title">{filteredName}</h3>
          <p className="projectcard--desription">
            {x.description.split("%")[0]}
          </p>
          <div className="projectcard--buttons">
            <a href={x.html_url}>
              <button>GitHub Link</button>
            </a>
            {demoLink && (
              <a href={demoLink}>
                <button>Live Demo</button>
              </a>
            )}
          </div>
        </div>
        <img className="projectcard--image" src={imgSrc} alt={alt} />
      </div>
    );
  });
  return <div>{renderedProjects}</div>;
}

export default ProjectCard;
