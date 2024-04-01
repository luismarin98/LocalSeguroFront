import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Admin, Client, Dashboard, Home, HomeDash, Login, Register, Profile, Activities, AdminRo, Verify } from "./routes";

function App() {

  useEffect(() => { document.title = 'Local Seguro' }, [])

  return (
    <div className='bg-white dark:bg-neutral-800 text-black dark:text-white flex flex-col max-h-screen'>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="register/:key" element={<Register />} />
        <Route path="/dashboard/:username" element={<Dashboard />}>
          <Route path="" element={<HomeDash />} />
          <Route path="client" element={<Client />} />
          <Route path="admin" element={<AdminRo />}>
            <Route path="" element={<Admin />} />
            <Route path="activities" element={<Activities />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<div className="w-full h-full flex items-center justify-center"><p className="text-2xl uppercase">Esta seccion aun se encuentra en desarrollo</p></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
