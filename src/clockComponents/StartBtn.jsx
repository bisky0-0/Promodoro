import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { breakAction, longAction, sessionAction } from "../store";

export function StartBtn() {
    // Select relevant data from Redux store
    const duration = useSelector(state => state.durations);
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();

    // Local state to manage timer activation
    const [isActive, setIsActive] = useState(false);

    // Effect to handle timer logic
    useEffect(() => {
        let timer = null;
        if (isActive && status['residual'] > 0) {
            timer = setInterval(() => {
                // Dispatch appropriate action based on current status
                status['status'] === 'SESSION' ? 
                    dispatch(sessionAction(status['residual'] - 1)) :
                    status['status'] === 'BREAK' ? 
                    dispatch(breakAction(status['residual'] - 1)) :
                    dispatch(longAction(status['residual'] - 1));
            }, 1000);
        } else if (status['residual'] <= 0) {
            // If timer reaches zero, stop the timer
            setIsActive(false);
            clearInterval(timer);
        }

        // Cleanup function to clear interval
        return () => clearInterval(timer);
    }, [isActive, dispatch, status, duration]);

    // Handler to start the timer
    const startTimer = () => {
        setIsActive(true);
    };

    // Handler to stop the timer
    const stopTimer = () => {
        setIsActive(false);
    };

    return (
        <button 
            id={isActive ? 'stop-btn' : 'start-btn'}
            onClick={() => isActive === false ? startTimer() : stopTimer()}
        >
            { !isActive ? 'Start' : 'Stop'}
        </button>
    );
}
