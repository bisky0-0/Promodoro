import { Sttings } from "./Settings"
export function Header() {
    return (
        <div id="header">
            <div id="logo">Promodoro</div>
            <button id="setngs-btn"></button>
            <Sttings />
        </div>
    )
}