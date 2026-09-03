import { useState } from "react";
import { MenuContext } from "./MenuContext";

export default function Menu({children}){

    const[open,setOpen] = useState(false);

    function toggleOpen(){
        setOpen(
            (prevState)=>!prevState
        );
    }

    return(
        <MenuContext.Provider value={ {open,toggleOpen} }>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    );
}