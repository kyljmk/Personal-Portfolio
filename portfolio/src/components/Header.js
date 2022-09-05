import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import "../styles/Header.css";

function Header({ darkMode, onClick }) {

    return (
        <header className="header">
            <h1 className="header--name">kyle<br/>manson-kullin.</h1>
            <div className="header--icongroup">
                <a href="https://www.linkedin.com/in/kyle-manson-kullin-34a933242/">
                    <LinkedInIcon sx={{ fontSize: 40 }} className="header--icon" />
                </a>
                <a href="https://github.com/kyljmk">
                    <GitHubIcon sx={{ fontSize: 40 }} className="header--icon" />
                </a>
                <a href="mailto:kyle.manson-kullin@appliedtechnology.se">
                    <AlternateEmailIcon sx={{ fontSize: 40 }} className="header--icon" />
                </a>
                { darkMode === false ? 
                    <NightlightIcon sx={{ fontSize: 40 }} className="header--icon" onClick={onClick} /> :
                    <LightModeIcon sx={{ fontSize: 40 }} className="header--icon" onClick={onClick} />
                }
            </div>
        </header>
    )
}

export default Header;