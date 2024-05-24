import { ListItem } from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { setSessionDuration, setBreakDuration, setLongBreakDuration, sessionAction, resetDurations }
    from '../store';

export function Sttings() {
    const dispatch = useDispatch();
    const durations = useSelector(state => state.durations);

    // Handler to save the custom durations
    const handleClick = (args) => {
        dispatch(setSessionDuration(args[0].value * 60));
        dispatch(setBreakDuration(args[1].value * 60));
        dispatch(setLongBreakDuration(args[2].value * 60));
        dispatch(sessionAction(args[0].value * 60));

        // Hide the settings menu after saving
        document.getElementById('settings-menue').style.display = 'none';
    };

    // Handler to reset durations to default
    const handleReset = () => {
        dispatch(resetDurations());
        dispatch(sessionAction(25 * 60));
        
        // Hide the settings menu after resetting
        document.getElementById('settings-menue').style.display = 'none';
    };

    // Handler to hide the settings menu
    const hideList = () => {
        return document.getElementById('settings-menue').style.display = 'none';
    };



    return (
        <div id="settings-menue">
            {/* Clickable area to hide the settings menu */}
            <div id="hide" onClick={() => hideList()}></div>

            {/* List items for custom durations */}
            <ListItem name={'Promodoro'} length={60} duration={durations.SESSION / 60} />
            <ListItem name={'Break'} length={15} duration={durations.BREAK / 60} />
            <ListItem name={'Long Break'} length={30} duration={durations.LONG_BREAK / 60} />
            
            
            <button id="save-btn" onClick={() => handleClick([
                document.getElementById('Promodoro-item'),
                document.getElementById('Break-item'),
                document.getElementById('Long Break-item')
            ])}>
                Save
            </button>
            <button id="reset-btn" onClick={() => handleReset()}>Reset</button>
        </div>
    );
}
