import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-[1530px] sm:h-[770px]  ">
      {/* SideBar */}
      <SideBar />
      {/* DashBoard */}
      <div className=" w-full h-[98%] sm:w-[90%] sm:h-[770px] flex  items-center justify-center ">
        <div className="bg-[#151C39] flex w-[95%] h-full  flex-col sm:flex-row sm:gap-2 justify-center items-center sm:w-[98%]  sm:h-[96%] rounded-3xl ">
          {/* Main Part */}
          <Main />
          {/* prfile part */}
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
