import React from 'react'
import Style from './popup.module.css';
import { FaTimes } from "react-icons/fa";

export default function PopUP(props:any) {
  return (props.trigger) ? (
    <div className={Style.main}>
      <div className= "text-3xl">
        <button  onClick={() => props.setTrigger(false)}><FaTimes/></button>
      </div>
      <br />
      <div className="container glass">
            {props.children}
      </div>
    </div>
  ) : "";
}
