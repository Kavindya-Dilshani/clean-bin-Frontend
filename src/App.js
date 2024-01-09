import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Header from './core/header/Header';
import Footer from './core/footer/Footer';
import Login from './pages/login/Login';
import SignUp from './pages/SignUp/SignUp';
import { PickUp } from './pages/pickUp/PickUp';


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          {/*private routes*/}
          <Route path='/pickUp' element={<PickUp />}></Route>


          {/*public Routes*/}
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signUp' element={<SignUp />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
        <Footer />
      </>
    </div>


  );
}

export default App;
