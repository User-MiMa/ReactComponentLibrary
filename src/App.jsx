import {FaMoneyBill} from "react-icons/fa"
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";
import MenuDropdownItem from "./components/Menu/MenuDropdownItem";

export default function App(){

    const sports = ["Tennis", "Basketball", "Football", "Beisball", "Cricket"];

    return(
        <main>
            <Button>
                <FaMoneyBill/>
                Buy now!
            </Button>
            <Menu>
                <MenuButton> Sports </MenuButton>
                <MenuDropdown> 
                    {sports.map(sport=>(<MenuDropdownItem key={sport}>{sport}</MenuDropdownItem>))} 
                </MenuDropdown>
            </Menu>
        </main>
    );
}