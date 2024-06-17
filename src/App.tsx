import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Admin, Client, Dashboard, Home, HomeDash, Login, Register, Profile, Activities, AdminRo, Verify, About, Terminos, Privacidad } from "./routes";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";

function App() {

  useEffect(() => { document.title = 'Local Seguro' }, [])

  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <Navbar />
      <div className="flex flex-col gap-2 justify-between items-center w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="register/:key" element={<Register />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/dashboard/:username" element={<Dashboard />}>
            <Route path="" element={<HomeDash />} />
            <Route path="client" element={<Client />} />
            <Route path="admin" element={<AdminRo />}>
              <Route path="" element={<Admin />} />
              <Route path="activities" element={<Activities />} />
              <Route path="*" element={<div className="w-full h-full flex items-center justify-center"><p className="text-2xl uppercase dark:text-white">Esta seccion aun se encuentra en desarrollo</p></div>} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<div className="w-full h-full flex items-center justify-center"><p className="text-2xl uppercase dark:text-white">Esta seccion aun se encuentra en desarrollo</p></div>} />
          </Route>
          <Route path="*" element={<div className="w-full h-full flex items-center justify-center"><p className="text-2xl uppercase dark:text-white">Esta seccion aun se encuentra en desarrollo</p></div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
