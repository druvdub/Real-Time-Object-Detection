import { useState } from "react";

import "./App.css";
import Main from "./components/Main/Main";
import NavButton from "./components/NavButton/NavButton";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="App">
      {isToggled ? (
        <Main />
      ) : (
        <NavButton setIsToggled={setIsToggled} isToggled={isToggled} />
      )}
    </div>
  );
}

export default App;
