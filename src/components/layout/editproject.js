import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "./loading"
import Input from '../elements/input'
import './style.module.edit.css'
import OptionCreate from "../../project/NewProject"
import Suss from "../elements/createwithsuss"
import FormProject from "../elements/formeditproject"
import {parse, v4} from 'uuid'
import ContainerToServices from "../elements/ContainerToServices"


function EditProject(){
    const {id} = useParams()
    const [info, setInfo] = useState([])
    const [ShowProjectEdit, setShowProjectEdit] = useState(false)
    const [service, setService] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState() 
    const [messagetwo, setMessagetwo] = useState(false)
    const [typee, setTypee] = useState()
    const [servicesscreen, setServicesscreeen] = useState([])
    const [valuerest, setValuerest] = useState([])



    useEffect(() =>{
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((dat) => {
                setInfo(dat)
                setServicesscreeen(dat)

            })
            .catch((erro)=> console.lolg(erro))
        }, 300);

    }, [id])


    function replace(){
        setShowProjectEdit(!ShowProjectEdit)
        
    }

    function editproject(project){
        if(project.namee < project.cost){
            setType('erro')
            setMessage('The budget no big the value')
            setTimeout(() =>{
                setMessage()
            }, 1000)
            return false
        }
        setType('suss')
        const time = setMessage('Project edit with suss')
        setTimeout(() => {
            setShowProjectEdit(!setShowProjectEdit)
            setMessage()
        }, 1000)


        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(project)
        }).then((data) => data.json())
        .then(res => {
            setInfo(res)
            
        })
        .catch(erro => console.log(erro))

        return () => clearTimeout(time)
    }



    function servicefun(){
        if(service){
            setService(false)
        }else{
            setService(true)
        }
        
        
        
    }


    function repassedite(e){
        const lasteservice = e.services[e.services.length -1]
     
        lasteservice.id = v4()

        const lastservicecost = lasteservice.cost
        const newcost = parseFloat(e.cost) + parseFloat(lastservicecost)
        const checkvalue = e.cost
        e.cost = newcost

       
            if(e.cost > e.namee){
            setMessagetwo(`Price of service is big Budget u$$${info.namee}`)
            setTypee('erro')
            setTimeout(() =>{
                setMessagetwo('')
            }, 3000)

            e.services.pop()
            
            return false;
        }else{
            setMessagetwo(`Service value u$$${e.services[e.services.cost]}`)
            setTypee('suss')
            setTimeout(() =>{
                setMessagetwo('')
            }, 3000) 

            
      
            
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(e)
            })
            .then(data => data.json())
            .then(resp => 
                { 
                    console.log(resp.cost)
                    setValuerest(e.cost)
                }
            )
            .catch(erro => console.log(erro))
        }
    }


    function showservices(id, cost){
        const servicesuptade = info.services.filter(
            (services) => services.id != id
        )

        const projectupdate = info

        projectupdate.services = servicesuptade
        projectupdate.cost = parseFloat(projectupdate.cost) - parseFloat(cost)

        fetch('' ,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectupdate)
        }).then(data => data.json())
        .then(resp => {
            setInfo(resp)
            setMessage('Remove services with suss')
            setType('suss')

            setTimeout(() =>{
                setMessage('')
            },1000)
        })
        .catch((erro) => {
            setMessage('errro detect ' + erro ) 
            setType('erro')
            setTimeout(() =>{
                setMessage('')
            },1000)
        })

        
    }

    


    return(
        <>
            {info.name 
            ? 
            (
                <div id="column_module">
                    {message && <Suss msg={message} type={type}/>}
                    <div id="container_onee">
                            <p className="h1-column">Project: {info.name}</p>
                            <div id="div-button-edit">
                            <button onClick={replace} className="button-click">
                                {!ShowProjectEdit ? (<p>Edit project</p>) : (<p>Exit</p>) }
                            </button>
                            </div>

                            {!ShowProjectEdit ? (
                                <div   className="project-info">
                                    <p>
                                        <span>Category:</span> {info.category.name}
                                    </p>

                                    <p>
                                        <span>Total BudGet:</span> u$$ {info.namee}
                                    </p>

                                    <p>
                                        <span>Total used:</span> u$$ {info.cost}
                                    </p>
                        
            
                                </div >
                            ) : (

                                <div className="project-info">
                                    <div id="project_marginbottom">
                                        <OptionCreate value={id} options={info} handleSubmit={editproject} xv='Set edit' projectdata={info}/>
        
                                    </div>

                                    <div id="container_twoow">
                                    {messagetwo && <Suss msg={messagetwo} type={typee}/>}
                                        <p id="p_to_h11">Adde one service</p>
                                        <button onClick={servicefun}>
                                        {service ? <span>Exit</span> : <span>Adde</span> }
                                        </button>

                                        {service && (
                                            <FormProject handsubmit={repassedite} projectdata={info}/>
                                        )}
                                        
                                    </div>

                                    <div>

                                        {servicesscreen.services.length === 0 ? <p>No services cadastre</p>
                                        :    info.services.map((info) => (
                                                <ContainerToServices
                                                    id={info.id}
                                                     name= {info.nameservice}
                                                    cost={info.cost}
                                                    description={info.Description}
                                                    handlechange={showservices}
                                                    price={valuerest}
                                                    
                                                />
                                        ))} 
                                                

                                        
                                            
                                        
                                    </div>
            
                                </div>

                               
                            
                                
                            )}
                    </div>
                </div>
            
            )
            : 
            <div id='loading_div'>

                <Loading edit='edit_loading'/>
            </div>
        }
        </>

        
    )
}

export default EditProject