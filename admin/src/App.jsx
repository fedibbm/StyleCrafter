import  { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Add from './pages/Add';
import Orders from './pages/Orders';
import List from './pages/List';
import Login from './components/Login';
import SetModelImage from './pages/SetModelImage';
import CategoryManager from './pages/CategoryManager';
import ModifyProduct from './pages/ModifyProduct';
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = 'dt';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <NavBar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
                <Route path="/set-model-image" element={<SetModelImage />} />
                <Route path="/categories" element={<CategoryManager token={token} />} />
                <Route path="/modify/:id" element={<ModifyProduct token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
