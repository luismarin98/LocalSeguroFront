import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Admin, Client, Dashboard, Home, HomeDash, Login, Register } from "./routes";

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
