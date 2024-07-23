import React, { useState } from "react";
import "../css/Popup.css";

function Popup() {
  const [seen, setSeen] = useState(false);

  function togglePop() {
    setSeen(!seen);
  }
  return (
    <div>
      <button onClick={togglePop}>Login</button>
      {seen ? <Login toggle={togglePop} /> : null}
    </div>
  );
}

export default Popup;
