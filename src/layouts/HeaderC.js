import React from "react";

function HeaderC() {
    console.log("Header rendered");
    const hStyle = {
        border: "2px solid skyblue",
        width: "100%",
        color: "blue"
    }
    return (
      <div>
          <h4 style={hStyle}>Displaying the Header Section</h4>
      </div>
    );
}

export default HeaderC;