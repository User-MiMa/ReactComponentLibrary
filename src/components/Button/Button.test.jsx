import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa";
import { render, screen } from "@testing-library/react";

describe("Button",()=>{

    test("Displays button with correct text",()=>{

        render(
            <Button>
                <FaMoneyBill/>
                Buy now!
            </Button>
        );

        expect(screen.getByRole("button")).toBeInTheDocument();
        expect(screen.getByRole("button").textContent).toBe("Buy now!");
    });

    test("Displays button with svg properly",()=>{

        render(
            <Button>
                <FaMoneyBill/>
                Buy now!
            </Button>
        );

        const btn = screen.getByRole("button");

        expect(btn.querySelector("svg")).toBeInTheDocument();

    });

});