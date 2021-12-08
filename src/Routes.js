import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/home/Home';
import AllRecords from './components/AllRecords/AllRecords';
import SingleRecord from './components/SingleRecord/SingleRecord';
import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from './components/Dashbaord/Dashboard';
import About from './components/About/About';



const Router = () => {
    return (
        <div>
             <Routes>
             <Route path="/register" element = {<Register />}/>
             <Route path="/" element = {<Login />}/>
             <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/allrecords" element={<AllRecords/>} />
                <Route path="/singleRecord/:id" element={<SingleRecord/>} />
                <Route path="/about" element={<About/>} />
             </Route>
             </Routes>
        </div>
    )
}

export default Router
