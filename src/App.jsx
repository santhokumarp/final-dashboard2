import Dashboard from "./pages/Dashboard/Dashboard"
import Kanban from "./pages/Kanban/Kanban"
import NFT from "./pages/nft/Nft"
import Table from "./pages/table/Table"
import Sign from "./pages/sign/Sign"
import Profile from "./pages/profile/Profile"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const [theme, setTheme] = useState('light'); // State for theme

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  return (
   <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="/nft" element={<NFT />} />
          <Route path="/table" element={<Table/>} />
          <Route path="/kanban" element={<Kanban/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/sign" element={<Sign/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   
   </div>
  )
}

export default App
