import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Admin, Client, Dashboard, Home, HomeDash, Login, Register, Profile, Activities, AdminRo } from "./routes";
import { UserRequest } from "./Interfaces/UserRequest";
import { getItem } from "./components/StorageFunctions";

function App() {

  const user: UserRequest | null = getItem('user');

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
          {
            user && user!.isAdmin && (
              <Route path="admin" element={<AdminRo />}>
                <Route path="" element={<Admin />} />
                <Route path="activities" element={<Activities />} />
              </Route>
            )
          }
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<div className="w-full h-full flex items-center justify-center"><p className="text-2xl uppercase">Page not found</p></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
