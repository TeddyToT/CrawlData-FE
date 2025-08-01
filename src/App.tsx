import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewsBox from "./components/NewBox/NewBox";
import NewsBox2 from "./components/NewBox/NewBox2";
import NewsBox3 from "./components/NewBox/NewBox3";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="flex justify-center items-center p-3">
      <h1 className="p-3 text-5xl">Báo đây</h1>
    </div>
      <div className="flex w-11/12 justify-center gap-3">

        <div className="flex flex-col w-3/4 gap-2">
          <NewsBox3/>
          <NewsBox3 />
          <NewsBox3 />
        </div>
                <div className="grid w-1/4 gap-2">
          <NewsBox />
          <NewsBox2 />
          <NewsBox />
          <NewsBox2 />
        </div>
      </div>
    </>
  );
}

export default App;
