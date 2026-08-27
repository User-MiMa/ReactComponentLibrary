import Button from "./components/Button/Button";
import {FaMoneyBill} from "react-icons/fa"
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";

export default function App(){
    return(
        <main>
            <Button>
                <FaMoneyBill/>
                Buy now!
            </Button>
            <Menu>
                <MenuButton>
                    Sports
                </MenuButton>
            </Menu>
        </main>
    );
}