import React from "react";

function FooterC() {
    console.log("Footer rendered");
    const fStyle = {
        border: "1px dotted gray",
        width: "100%",
        color: "gray"
    }
    return (
        <div>
            <h6 style={fStyle}>Displaying the Footer Section</h6>
        </div>
    );
}

export default React.memo(FooterC);