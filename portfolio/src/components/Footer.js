import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "../styles/Footer.css";

function Footer({ darkMode }) {
  return (
    <footer className={`footer${darkMode ? "-dark" : ""}`}>
      <div className={`footer--icongroup${darkMode ? "-dark" : ""}`}>
        <a href="https://www.linkedin.com/in/kyle-manson-kullin-34a933242/">
          <LinkedInIcon
            sx={{ fontSize: 40 }}
            className={`footer--icon${darkMode ? "-dark" : ""}`}
          />
        </a>
        <a href="https://github.com/kyljmk">
          <GitHubIcon
            sx={{ fontSize: 40 }}
            className={`footer--icon${darkMode ? "-dark" : ""}`}
          />
        </a>
        <a href="mailto:kyle.manson-kullin@appliedtechnology.se">
          <AlternateEmailIcon
            sx={{ fontSize: 40 }}
            className={`footer--icon${darkMode ? "-dark" : ""}`}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
