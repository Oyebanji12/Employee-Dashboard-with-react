import {useState} from "react"
import Main from "./component/main/Main"
import Navbar from "./component/navbar/Navbar"
import Sidebar from "./component/sidebar/Sidebar"


function App() {
  

  return (
    <div>
      <div className="container">
        <Navbar  />
        <Main />
        
        <Sidebar />
        
        
      </div>
      
    </div>
  );
}

export default App;
