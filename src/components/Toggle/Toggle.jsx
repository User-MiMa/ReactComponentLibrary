import { ToggleContext } from "./ToggleContext";
import { useState } from "react";

export default function Toggle({children}){

    const [display, setDisplay] = useState(false);

    function toggle(){
        setDisplay(prevDisplay=>!prevDisplay);
        console.log('toggle',display);
    }

    return(
        <ToggleContext.Provider value={{display, toggle}}>
            {children}
        </ToggleContext.Provider>
    );
}