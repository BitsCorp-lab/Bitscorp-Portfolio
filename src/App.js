import "./App.css";

import Home from "./App/Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [showPortf, setShowPortf] = useState(false);
  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1208) {
      setShowPortf(true);
    }
  }, []);

  window.addEventListener("resize", function () {
    const width = window.innerWidth;
    if (width >= 1208) {
      setShowPortf(true);
    } else {
      setShowPortf(false);
    }
  });
  return (
    <>
      {showPortf ? (
        <Home />
      ) : (
        <>
          <div
            style={{
              textAlign: "center",
              color: "whitesmoke",
              fontFamily: "appFont",
              fontSize: "20px",
            }}
          >
            Please increase window size and refresh
          </div>
        </>
      )}
    </>
  );
}

export default App;
