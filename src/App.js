import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Login from './Pages/Login/Login';
import AddItem from './Pages/AddItem/AddItem';
import Register from './Pages/Register/Register';
import MyItems from './Pages/MyItems/MyItems';


function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>

        <Route path='/manage-inventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>

        <Route path='/addnewitem' element={<AddItem></AddItem>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
