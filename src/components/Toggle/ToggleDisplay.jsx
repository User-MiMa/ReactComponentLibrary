import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";

export default function ToggleDisplay({children}){

    const {display} = useContext(ToggleContext)

    return(
        display ? children : null
    );
}