import './style.module.select.css'

function Select({Text, name, options, handleonChange, value}){
    return(
    
        <div className="container">
            <label htmlFor={name}>Select one option:</label>
            <select name={name} id={name} onChange={handleonChange} value={value} placeholder='xv'>
                <option selected disabled>Select option</option>
                {options.map((optionx) => (
                     <option value={optionx.id} key={optionx.id} >{optionx.name}</option>
                ))}
               
               
            </select>
        </div>
    )
}

export default Select