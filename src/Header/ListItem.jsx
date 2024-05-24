import { useState, useEffect } from "react";

export function ListItem({ name, length, duration }) {
    // Local state to manage the current value of the duration
    const [localDuration, setLocalDuration] = useState(duration);

    // Effect to update local state whenever the prop `duration` changes
    useEffect(() => {
        setLocalDuration(duration);
    }, [duration]);

    // Handler for range input change
    const handleChange = (e) => {
        // Update the local state with the new value
        setLocalDuration(e.target.value);
        return e.target.value;
    };

    return (
        <div className="item">
            <label htmlFor={name}>{name} <span>{localDuration}</span></label>
            <input 
                type="range" 
                name={name} 
                id={`${name}-item`}
                min={1} 
                max={length} 
                value={localDuration} // Bind input value to local state
                onChange={(e) => handleChange(e)} // Handle value change
            />
        </div>
    );
}
