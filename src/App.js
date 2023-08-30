import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Services from './components/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products'

import Vegtablesfruits from './components/Vegtablesfruits';
import Cart from './components/Cart';

import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <div>
       <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />          
          <Route path='home' element={<Home/>}/>
          <Route path='category' element={<Category />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Services />} />
          <Route path='contact' element={<Contact />} />
          <Route path='products/:id' element={<Products/>}/>
         
          
          
          {/* <Route path='vegtablesfruits' element={<Vegtablesfruits />} /> */}
        </Routes> 

      </Router>
     <Cart/>
      </Provider>
    </div>
  );
}

export default App;
