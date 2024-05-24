import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { sessionAction } from "../store";

export function Clock() {
    const status = useSelector(state => state.status);
    const residual = useSelector(state => state.status.residual);
    const durations = useSelector(state => state.durations);
    const dispatch = useDispatch();

    // Local state to manage the residual time
    const [localResidual, setLocalResidual] = useState(residual);

    useEffect(() => {
        // Update local residual time when Redux state changes
        setLocalResidual(residual);

        // Play alarm sound when timer reaches zero
        if (residual === 0) {
            const alarm = document.getElementById("alarm-audio");
            if (alarm) {
                alarm.play();
                // Reset the timer to session duration when it reaches zero
                dispatch(sessionAction(durations['SESSION']));
            }
        }
    }, [residual, dispatch, durations]);

    // Format total seconds into minutes:seconds format
    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    
    // Dynamically set border color based on current session status
    const clockStyle = {
        border: status.status === 'SESSION' ? `5px solid #96c642e3` :
                status.status === 'BREAK' ? `5px solid #ed7d2d` :
                `5px solid #000`
    };

    return (
        <div id="clock" style={clockStyle}>
            {formatTime(localResidual)}
            {/* Audio element for alarm sound */}
            <audio id="alarm-audio" src="../src/assets/536420__rudmer_rotteveel__electronic-timer-beeping-4x.wav" preload="auto"></audio>
        </div>
    );
}
