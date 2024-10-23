import "./css/styles.css";
import HeaderC from "./layouts/HeaderC";
import FooterC from "./layouts/FooterC";
import DisplayCounter from "./contents/DisplayCounter";
import DisplayFlag from "./contents/DisplayFlag";
import ChangeState from "./actions/ChangeState";
import React, {useState, useCallback} from "react";

export default function App() {

    // counter
    const [cnt, setCount] = useState(0);
    // boolean state
    const [mFlag, setFlag] = useState(true);

    let changeCnt = useCallback(() => {
        setCount(cnt + 1);
    }, [cnt]);

    let changeFlag = useCallback(() => {
        setFlag(!mFlag);
    }, [mFlag]);

  return (
      <div className="App">
          <HeaderC/>
            <DisplayCounter counter={cnt}/>
            <DisplayFlag flag={mFlag}/>
            <ChangeState caption="Change Cnt" click={changeCnt}/>
            <ChangeState caption="Change Flag" click={changeFlag}/>
          <FooterC/>
      </div>
  );
}