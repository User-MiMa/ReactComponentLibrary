import { createContext, useState } from "react";

const MenuContext = createContext();

export default function Menu({children}){

    const[open,setOpen] = useState(false);

    function toggleOpen(){
        setOpen(
            (prevState)=>!prevState
        );
    }

    return(
        <MenuContext.Provider>
            <div>
                {children}
            </div>
        </MenuContext.Provider>
    );
}

export {MenuContext};