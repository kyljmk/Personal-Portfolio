function ProjectCard({ projectsArray }) {
  projectsArray.sort((a, b) => {
    let da = new Date(a.updated_at),
      db = new Date(b.updated_at);
    return db - da;
  });

  console.log(projectsArray);

  const renderedProjects = projectsArray.map((x) => {
    const imgSrc = "./" + x.name + ".png";
    const alt = "A preview of " + x.name;

    return (
      <div className="projectcard">
        <div className="projectcard--text">
          <h3 className="projectcard--title">{x.name}</h3>
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
