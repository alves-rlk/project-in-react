
import loadingsvg from '../../img/bouncing-circles.svg'
import './loading.css'
import { useState } from 'react'

function Loading({edit}){
    return(
        <div id='container-loa' >
            <img src={loadingsvg} alt='svg loadingsvg' id='img-loading' className={edit}></img>
        </div>
    )
}

export default Loading