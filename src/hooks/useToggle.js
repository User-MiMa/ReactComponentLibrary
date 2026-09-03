import { useState } from "react";

export default function useToggle(){

    const [toggled,setToggle] = useState(false);

    function hookToggleFunction(){
        setToggle(prevToggleState=>!prevToggleState);
    }

    return [toggled, hookToggleFunction];
}