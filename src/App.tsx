import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Admin, Client, Dashboard, Home, HomeDash, Login, Register, Profile, Activities, AdminRo, Verify } from "./routes";
import { Navbar } from "./components/Navbar";

function App() {

  useEffect(() => { document.title = 'Local Seguro' }, [])

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-between">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full h-full">
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
            <Route path="*" element={<div className="w-full h-full flex items-center justify-center"><p className="text-2xl uppercase dark:text-white">Esta seccion aun se encuentra en desarrollo</p></div>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
