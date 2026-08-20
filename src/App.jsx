import Button from "./components/Button";
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