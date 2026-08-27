import Button from "./components/Button/Button";
import {FaMoneyBill} from "react-icons/fa"

export default function App(){
    return(
        <main>
            <Button>
                <FaMoneyBill/>
                Buy now!
            </Button>
        </main>
    );
}