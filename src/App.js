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
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Loading from './Pages/Shared/Loading/Loading'
import NotFound from './Pages/Shared/NotFound/NotFound';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import PasswordSent from './Pages/ResetPassword/PasswordSent';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>



        <Route path='/inventory/:id' element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>


        <Route path='/manage-inventories' element={<RequireAuth><ManageInventories></ManageInventories></RequireAuth>}></Route>

        <Route path='/myitems' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>


        <Route path='/addnewitem' element={<RequireAuth>
          <AddItem></AddItem>
        </RequireAuth>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/loading' element={<Loading></Loading>}></Route>



        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Register></Register>}></Route>
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/passwordsent' element={<PasswordSent></PasswordSent>}></Route>

        <Route path='*' element={<NotFound></NotFound>}> </Route>


      </Routes>

      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
