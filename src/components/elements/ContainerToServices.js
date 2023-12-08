import  './style.camps.css'
import {BsFillTrashFill} from 'react-icons/bs'



function ContainerToServices({id, name, cost, description, handlechange, price}){

    const remove = (e ) =>{
        
        handlechange(id, cost)
    }

    return(
        <div id="full_camps" key={id}>
        
        <h1 id="h1_camps">
            <span>Service: </span>{name}
        </h1>
        <div>
            <p>
                <span>Value used:</span> u$$ {cost}
            </p>

            <p >
                <span>
                    Description:                     
                </span>

                <span id='space'>
                    
                </span>{description}
            </p>

            <p id='p_bottom'>
                <span>
                rest of the value:
                </span><span id='spacetwo'>u$$ {price}</span>
            </p>

            <button onClick={remove} id='button_edit_services'>
                <span id='lix_services'><BsFillTrashFill/></span> Remove
            </button>
        </div>

            


        </div>
    )
}


export default ContainerToServices