import Home from '../src/component/Home'
import Knowmore from './component/Knowmore'
import $ from 'jquery'
import '../src/button.css'
import { useState } from 'react'
import '../src/body.css'
import Header1 from '../src/component/Header'
import Contrubuter from '../src/component/Creaters'
import Login from './component/Login';
import { useForm } from 'react-hook-form'
import Global_chat from './component/Global_chat'
import Register from './component/Register'
import Hashtag from './component/Hashtag'
import TrendingNews from './component/TrendingNews'
import Donate from './component/Donate'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App conatiner">
       
         <Router>
         <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Login' element={<Login/>}></Route>
         <Route path='/Register' element={<Register/>}></Route>
         <Route path='/Hashtag' element={<Hashtag/>}></Route>
         <Route path='/Trendingnews' element={<TrendingNews/>}></Route>
         <Route path='/Donate' element ={<Donate/>}></Route>
         </Routes>
         </Router>
       
      
      

    </div>
  );
}

export default App;
