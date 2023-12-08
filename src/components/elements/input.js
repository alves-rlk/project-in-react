
import './style.modules.css'

function input({type, text, name, placeholder, handleonChange, value}){
    return(
        <div className="container">
            <label htmlFor={name}>{text} </label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleonChange} value={value} required min={1}></input>

        </div>
    )
}

export default input