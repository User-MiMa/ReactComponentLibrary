import Star from "./Star";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Star unit test suite",()=>{

    test("Star is displayed",()=>{

        render(<Star/>);

        expect(document.querySelector("svg")).toBeInTheDocument();

    });

    test("Star switches svg on clicks",async ()=>{

        const user = userEvent.setup();
        render(<Star/>);

        expect(document.querySelector("svg")).not.toHaveClass("filled");

        await user.click(document.querySelector(".star"));

        expect(document.querySelector("svg")).toHaveClass("filled");

        await user.click(document.querySelector(".star.filled"));

        expect(document.querySelector("svg")).not.toHaveClass("filled");
    
    });

});