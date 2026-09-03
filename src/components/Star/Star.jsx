import { BsStar, BsStarFill } from "react-icons/bs";
import useToggle from "../../hooks/useToggle";

export default function Star(){

    const [toggled, hookToggleFunction] = useToggle();

    return(
        toggled ?
        <BsStarFill onClick={hookToggleFunction} className="star filled" /> :
        <BsStar onClick={hookToggleFunction} className="star" />
    );
}