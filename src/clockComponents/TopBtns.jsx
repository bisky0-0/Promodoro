import { useDispatch, useSelector } from "react-redux";
import { sessionAction, breakAction, longAction } from "../store";

export function TopBtns() {
    // Select relevant data from Redux store
    const duration = useSelector(state => state.durations);
    const dispatch = useDispatch();

    // Handler to dispatch the corresponding action based on the button clicked
    const handleClick = (action) => {
        dispatch(action);
    };

    return (
        <div id="top-btns">
            {/* Button to start a Pomodoro session */}
            <button id="promo-btn" className="top-btns" onClick={() => handleClick(sessionAction(duration['SESSION']))}>
                Promodoro</button>
            
            {/* Button to start a Break */}
            <button id="break-btn" className="top-btns" onClick={() => handleClick(breakAction(duration['BREAK']))}>
                Break</button>
            
            {/* Button to start a Long Break */}
            <button id="lng-break-btn" className="top-btns" onClick={() => handleClick(longAction(duration['LONG_BREAK']))}>
                Long Break</button>
        </div>
    );
}
