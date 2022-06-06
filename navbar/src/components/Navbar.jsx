import React from "react";
import { Button } from "./Button";
import { Links } from "./Links";
import { Logo } from "./Logo";
import "./style.css"
const Navbar=()=>{
    return (
       <div className="maindiv">
           <Logo/>
           <Links/>
           <Button/>
       </div>
    )
}
export {Navbar}