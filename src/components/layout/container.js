import Teext from '../layout/suss/text/mens'
import { useState, useEffect } from 'react'
import Loading from './loading'
import Textnoproject from './foundnoproject'
import Suss from '../elements/createwithsuss'
import { toBeRequired } from '@testing-library/jest-dom/matchers'

function Container(props){
    const [categiry, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    const [remove, setRemove] = useState(false)
    const [text, setText] = useState()

    useEffect(() =>{
            fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",

        },

    }).then((suss) => suss.json())
    .then(
        (data) => {
        setCategory(data)
        setLoading(true)    
        
    })
    .catch((erro) => console.log("New erro " + erro))
    
    }, [])



   

    function removeProject(idd){
        fetch(`http://localhost:5000/projects/${idd}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
        }).then((data) => data.json())
        .then(() => {
            setCategory(categiry.filter((category) => category.id != idd))
            setText('Project delete with suss')
        })
        .catch(erro => console.log(erro))
    }





 

    return(
        <div className='div'>
            {text && <Suss msg={text} type='suss'/>}
            {categiry.length > 0 && (
                categiry.map((array) =>  <Teext handleRemove={removeProject} name={array.name} id={array.id} budget={array.namee} category={array.category.name}/>)
            )}

        {!loading && <Loading/>}


        {loading && categiry.length < 1 && (
            <Textnoproject/>
        )}

                
            
        </div>

    )
}

export default Container