import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import "../styles/Header.css";
import "../darkstyles/HeaderDark.css";

function Header({ darkMode, onClick }) {
  return (
    <header className={`header${darkMode ? "-dark" : ""}`}>
      <h1 className={`header--name${darkMode ? "-dark" : ""}`}>
        {"kyle "}
        <br className="linebreak" />
        manson-kullin.
      </h1>
      <div className={`header--icongroup${darkMode ? "-dark" : ""}`}>
        <a href="https://www.linkedin.com/in/kyle-manson-kullin-34a933242/">
          <LinkedInIcon
            sx={{ fontSize: 40 }}
            className={`header--icon${darkMode ? "-dark" : ""}`}
          />
        </a>
        <a href="https://github.com/kyljmk">
          <GitHubIcon
            sx={{ fontSize: 40 }}
            className={`header--icon${darkMode ? "-dark" : ""}`}
          />
        </a>
        <a href="mailto:kyle.manson-kullin@appliedtechnology.se">
          <AlternateEmailIcon
            sx={{ fontSize: 40 }}
            className={`header--icon${darkMode ? "-dark" : ""}`}
          />
        </a>
        {darkMode === false ? (
          <NightlightIcon
            sx={{ fontSize: 40 }}
            className={`header--icon${darkMode ? "-dark" : ""}`}
            onClick={onClick}
          />
        ) : (
          <LightModeIcon
            sx={{ fontSize: 40 }}
            className={`header--icon${darkMode ? "-dark" : ""}`}
            onClick={onClick}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
