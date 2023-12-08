import './style.css'
import Inputs from '../components/elements/input'
import Select from '../components/elements/Select'
import Button from '../components/elements/Button'
import {useEffect, useState} from 'react'
import select from '../components/elements/Select'
import Suss from '../components/elements/createwithsuss'


function OptionCreate({handleSubmit , xv, projectdata}){
    const [categorias, setCategorias] = useState([])
    const  [ofrato, setrat] = useState(projectdata || {})

    
   useEffect(() =>{
    fetch("http://localhost:5000/categories",{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    
    }, [])
    .then((resp) => resp.json())
    .then((data) => {
      if(ofrato){
        setCategorias(data)
      }
    })
    .catch((erro) => console.log(erro))
   }, [])
   
   function UpdateData(e){
    e.preventDefault()
    handleSubmit(ofrato)
    
 }

 function handChange(e){
  setrat({...ofrato, [e.target.name]: e.target.value})

}

function handcategory(e){
  setrat({...ofrato, category: {
    id: e.target.value,
    name: e.target.options[e.target.selectedIndex].text,

  },
})
}


  
    return(
       <div className="container-create-project">
          <form onSubmit={UpdateData}>
            <Inputs type='text' text='Name project:' name='name' placeholder='Type name project'  handleonChange={handChange}
            value={ofrato.name ? ofrato.name : ''}
            />
            <Inputs type='number' text='Budget project:' name='namee' placeholder='Type Budget' handleonChange={handChange}
            value={ofrato.namee}
            />
            <Select Text='Select one' name='selectx' id='selectx' options={categorias} handleonChange={handcategory}
            value={ofrato.id}
            />
            <Button Text={xv} onCLick={Suss}>{handChange}</Button>
          </form>

        </div>
    )
}

export default OptionCreate