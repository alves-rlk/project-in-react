
import { useEffect, useState } from 'react'
import style from './xstyle.module.logo.css'



function Logo({type, msg}){
    const [visible, setVisible] = useState(false)
    const x = true

    useEffect( () => {
        if(!msg){
            setVisible(false)
            return
        }else{
            setVisible(true)
        }

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

        
    }, [msg])
    
    return(
        <>
            {visible && (<div className={`${'container-module-create'} ${[type]}`}>
            {msg}   
            </div>)}
        </>
       
    )
}

export default Logo