import { render, screen } from "@testing-library/react";
import MenuWithToggle from "./MenuWithToggle";
import MenuWithToggleButton from "./MenuWithToggleButton";
import MenuDropdownWithToggle from "./MenuDropdownWithToggle";

describe("MenuWithToggle unit test suite",()=>{

    test("MenuWithToggle displays children",()=>{

        render(<MenuWithToggle>MenuWithToggle children content</MenuWithToggle>);
        
        expect(screen.getByText("MenuWithToggle children content")).toBeInTheDocument();
    })

    test("MenuWithToggleButton displays children",()=>{

        render(<MenuWithToggleButton>MenuWithToggleButton children content</MenuWithToggleButton>);
        
        expect(screen.getByText("MenuWithToggleButton children content")).toBeInTheDocument();
    });

    test("MenuDropdownWithToggle displays children",()=>{

        render(<MenuDropdownWithToggle>MenuDropdownWithToggle children content</MenuDropdownWithToggle>);
        
        expect(screen.getByText("MenuDropdownWithToggle children content")).toBeInTheDocument();
    });

});