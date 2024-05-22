export function Sttings() {
    return (
        <div id="settings-menue">
            <ListItem name={'Promodoro'} duration={60}/>
            <ListItem name={'Break'} duration={30}/>
            <ListItem name={'Long Break'} duration={60} />
            
            <button id="reset-btn">Reset</button>
        </div>
    )
}


function ListItem({name, duration}) {
    return (
        <div className="item">
            <label htmlFor={name}>{name}</label>
            <input type="range" name={name} id={`${name}-item`}
                min={1}
                max={duration}
            />
        </div>
    )
}

