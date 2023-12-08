import { useEffect, useState } from 'react'
import './style.module.create.suss.css'



function Suss({msg, type}){
    const [visible, setVisible] = useState(false)

    useEffect(() =>{
        if(!msg){
            setVisible(false)
        }else{
          setVisible(true)
          
          const timer = setTimeout(() => {
            setVisible(false)
          }, 1000);

          return () => clearTimeout(timer)
        }
    }, [msg])


    return(
        <>
            {visible &&  <div className={`${'container_mes'} ${type}`}>
                        {msg}
                </div>
            }
        </>
       
        
    )
}

export default Suss