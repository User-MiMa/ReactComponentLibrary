import { useState } from "react";

export default function Menu({children}){

    const[open,setOpen] = useState(false);

    function toggleOpen(){
        setOpen(
            (prevState)=>!prevState
        );
    }

    return(
        <MenuContext.Provider value={open}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    );
}