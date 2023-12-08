import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../components/page/home'
import Company from '../components/page/company'
import Contact from '../components/page/contact'
import CreateNewProject from '../components/page/NewProject/project'
import Page from '../components/page/projectcreate/PageNewProject'
import EditProject from '../components/layout/editproject'


export default function RoutesApp(e){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/company' element={<Company/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/newproject' element={<CreateNewProject/>}/>
                <Route path='/projectcreatesuss' element={<Page/>}/>
                <Route path={`/projects/:id`} element={<EditProject/>}/>
            
            </Routes>
        </BrowserRouter>
    )
}