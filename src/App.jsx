import Button from "./components/Button/Button";
import {FaMoneyBill} from "react-icons/fa"
import Menu from "./components/Menu/Menu";

export default function App(){
    return(
        <main>
            <Button>
                <FaMoneyBill/>
                Buy now!
            </Button>
            <Menu>
                Sports
            </Menu>
        </main>
    );
}