function TechStackCard({ title, image, alt }) {
  return (
    <div className="techstack--card">
      <img className="techstack--card--image" src={image} alt={alt} />
      <h3 className="techstack--card--title">{title}</h3>
    </div>
  );
}

export default TechStackCard;
