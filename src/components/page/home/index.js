import React from 'react'
import CreateImgTwo from '../../../img/indextwo'
import style from './style.css'
import NewProject from '../../layout/Button-Create'

function Home(){
    function Costs(){
        return(
            <span className='cost'>
                 Costs
            </span>
        )
    }
    return(
        <>
            <h1>Wel-come to <Costs/></h1>
            <p className='p-create'>Start managing your projects rigth now</p>
            <NewProject/><br></br>
            <CreateImgTwo/>
       </>
    )
}

export default Home