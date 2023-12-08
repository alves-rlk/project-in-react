import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Logoxx from '../../layout/suss/ProjectLogo'
import { useLocation } from 'react-router-dom'
import Container from '../../layout/container'
import './style.css'
import NewProject from '../../layout/Button-Create'
import Suss from '../../elements/createwithsuss'

function CreateNewProject(){
    
    const location = useLocation()

    let message = ''
    if(location.state){
        message = location.state.message
    }


    return(
        <div className='container'>
                <div className='recurs'>
                    <h1 className='h1-projects' id='h4-select'>My projects</h1>
                   <div>
                   <a href='/newproject' className='button-newproject'><button  className='xx' id='button-select'>Create new project</button></a>
                   </div>
                </div>
                {message && <Suss msg='project create with suss' type='suss'/>}

                <div className='x'>
                
                    <Container/>
                </div>
                
          
        </div>
    )
}

export default CreateNewProject