import OptionCreate from '../../../project/NewProject'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Select from '../../elements/Select'


function CreateNewProject(){

    const history = useNavigate()
    function CreateNew(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then((respt) => respt.json())
        .then(() => {
            history('/projectcreatesuss',{state: {message: "Project create with suss"}})
            
        })
        .catch((newerro) => {
            console.log(newerro)
        })
    }

    return(
        <div>

            <h1>Creating project</h1>
            <p className='p-create'>Create your project to after adde the services</p>
            <OptionCreate xv='Create project' handleSubmit={CreateNew}/>

        </div>
    )
}

export default CreateNewProject