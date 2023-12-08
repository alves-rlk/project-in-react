import { useState } from 'react'
import Button from './Button'
import Input from './input'


function FormProject({handsubmit, projectdata}){
    const [services, setServices] = useState({})
    function submitx(e){
        e.preventDefault()
        projectdata.services.push(services)
        handsubmit(projectdata)

    }


    function onChangeee(e){
        setServices({...services, [e.target.name]: e.target.value})
    }
    return(
        <div>
            <form onSubmit={submitx}>
                <Input text='Name services:'  handleonChange={onChangeee}  type='text' name='nameservice' placeholder='Name servoce' />
                <Input text='Price service:'  handleonChange={onChangeee} type='number' name='cost' placeholder='Price service' />
                <Input text='Name Description:' handleonChange={onChangeee}  type='text' name='Description' placeholder='Name Description:' />
                <Button Text='Submit edit'/>
            </form>
        </div>
    )
}

export default FormProject