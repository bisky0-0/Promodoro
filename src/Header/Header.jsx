import { Sttings } from "./Settings";

export function Header() {
    // Handler to toggle the settings menu visibility
    const handleClick = () => {
        const list = document.getElementById('settings-menue');

        // If the settings menu is visible, hide it; otherwise, show it
        if (list.style.display !== 'none') {
            list.style.display = 'none';
        } else {
            list.style.display = 'flex';
        }
    };

    return (
        <div id="header">
            <div id="logo">Promodoro</div>
            {/* Button to toggle settings menu visibility */}
            <button id="setngs-btn" onClick={() => handleClick()}></button>
            {/* Settings component */}
            <Sttings />
        </div>
    );
}
