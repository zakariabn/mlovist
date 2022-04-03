import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home'
import Review from './components/Pages/Review/Review';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Blogs from './components/Pages/Blogs/Blogs';
import About from './components/Pages/About/About';

import NotFound from './components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/reviews' element={<Review></Review>} ></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
      <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
      <Route path='/about' element={<About></About>} ></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
    </Routes>
    </div>
  );


}

export default App;
