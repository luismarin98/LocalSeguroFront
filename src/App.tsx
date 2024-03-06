import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Admin, Client, Dashboard, Home, HomeDash, Login, Register, Profile } from "./routes";

function App() {
  useEffect(() => { document.title = 'Local Seguro' }, [])
  return (
    <div className='bg-white dark:bg-neutral-800 text-black dark:text-white flex flex-col max-h-screen'>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<HomeDash />} />
          <Route path="client" element={<Client />} />
          <Route path="admin" element={<Admin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<div className="w-full h-full flex items-center justify-center"><p className="text-2xl uppercase">Page not found</p></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
