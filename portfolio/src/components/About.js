import "../styles/About.css"

function About() {
    return (
        <div className="about--container">
                <img 
                    className="about--picture"
                    src="/portfolio-pic.png" 
                    alt="the author"
                />
                <p className="about--para">
                    I am a fullstack .NET software developer with a penchant 
                    for React. I was born in South Africa, and have lived in the UK, 
                    Austria and Spain, before settling in Sweden. It was in Stockholm 
                    where I discovered the fullstack course at the School of Applied 
                    Technology, allowing me to leave the hospitality industry 
                    after 15 years and finally begin my career in programming.
                </p>
        </div>
    )
}

export default About;