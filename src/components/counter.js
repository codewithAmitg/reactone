import React, { useState } from "react";

function Exe3() {
const [counter, setCount] = useState(0);
// var count = 0
    function countCallback(){
        setCount(counter + 1)
    }
    // function countCallback(){
    //     count = count + 1;
    // }
  return (
    <div className="app">
      <span>{counter}</span>
        <button onClick={countCallback}>button1</button>
    </div>

  );
}

export default Exe3;
