 
import './App.css';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import NotFound from './pages/NotFound/NotFound';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import CreateUser from './pages/CreateUser/CreateUser';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/create' element={<CreateBlog/>}/>  
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/blogs/:id' element={<BlogDetails/>}/> 
        <Route path='/create-user' element={<CreateUser/>}/>
      </Routes> 
       <Footer/>

    </div>
  );
}

export default App;
