import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./index copy.css";
import "animate.css";
const duration = 800;

function MyTransition({ visible, children }) {
  return (
    <CSSTransition
      appear
      mountOnEnter
      in={visible}
      timeout={duration}
      classNames={{
        exitActive: "animate__bounce",
        exitDone: "animate__flash",
        enterActive: "animate__shakeX",
        appearActive: "animate__shakeY",
      }}
    >
      {children}
    </CSSTransition>
  );
}

function Comp1() {
  return <h1 className="title animated fast">组件1</h1>;
}

function Comp2() {
  return <h1 className="title animated fast">组件2</h1>;
}

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="container">
      <div className="comp-container">
        <MyTransition visible={show}>
          <Comp1 />
        </MyTransition>
        <MyTransition visible={!show}>
          <Comp2 />
        </MyTransition>
        </div>
      </div>
      <button onClick={() => setShow(!show)}>点击隐藏</button>
    </div>
  );
}
