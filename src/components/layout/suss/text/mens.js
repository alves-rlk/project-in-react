import  './style-mens.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'


function Teext({name, budget, id, category, handleRemove}){
    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)

    }

    console.log(id)
     
    return(
        <div className='full'>
            <h4 className='av'>{name}</h4>
            <p><span className='span-one'>Budget:</span> u$$ {budget}</p>
            <p className='p-one'><span className={`${category.toLowerCase()}`}></span><span className='span-one'>Category:</span> {category}</p>
            <a href={`projects/${id}`}><button id='submit-edit'><BsPencil/> Edit</button></a>
            <button id='submit-remove' onClick={remove}><BsFillTrashFill/> Remove</button>
            
        </div>

    )
}

export default Teext