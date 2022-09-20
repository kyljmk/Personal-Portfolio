function TechStackCard({ title, image, alt, darkMode }) {
  return (
    <div className={`techstack--card${darkMode ? "-dark" : ""}`}>
      <img className="techstack--card--image" src={image} alt={alt} />
      <h3 className={`techstack--card--title${darkMode ? "-dark" : ""}`}>
        {title}
      </h3>
    </div>
  );
}

export default TechStackCard;
