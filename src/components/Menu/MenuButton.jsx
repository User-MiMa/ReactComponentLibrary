import { useContext } from "react";
import { MenuContext } from "./MenuContext";

export default function MenuButton({children}){

    const {toggleOpen} =useContext(MenuContext);

    return(
        <button onClick={toggleOpen}>
            {children}
        </button>
    );
}