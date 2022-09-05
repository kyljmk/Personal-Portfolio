import "../styles/ProjectCard.css";

function ProjectCard({ projectsArray }) {
    console.log(Array.isArray(projectsArray))
    const renderedProjects = projectsArray.map(x => {
            return <h1>{x.name}</h1>
})
    return (
        <div>{renderedProjects}</div>
    )
}

export default ProjectCard;