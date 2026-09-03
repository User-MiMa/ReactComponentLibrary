import { render, screen } from "@testing-library/react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuDropdownItem from "./MenuDropdownItem";
import userEvent from "@testing-library/user-event";

describe("Menu tests",()=>{

    const sports = ["Tennis", "Basketball", "Football", "Beisball", "Cricket"];

    const renderMenu = ()=> render(
            <Menu>
                <MenuButton> Sports </MenuButton>
                <MenuDropdown> 
                    {sports.map(sport=>(<MenuDropdownItem key={sport}>{sport}</MenuDropdownItem>))} 
                </MenuDropdown>
            </Menu>
        );

    test("Menu button displays correct text",()=>{

        renderMenu();

        expect(screen.getByRole("button").textContent).toBe(" Sports ");

    });

    test("Menu dropdown hidden on render", ()=>{

        renderMenu();

        for(const sport of sports){
            expect(screen.queryByText(sport)).not.toBeInTheDocument();
        }

    });

    test("Clicking menu button displays expected items", async ()=>{

        const user = userEvent.setup();
        renderMenu();
        const btn = screen.getByRole("button");

        await user.click(btn);

        for(const sport of sports){
            expect(screen.getByText(sport)).toBeInTheDocument();
        }

    });

    test("Clicking menu button again hides dropdown items", async ()=>{

        const user = userEvent.setup();
        renderMenu();
        const btn = screen.getByRole("button");

        await user.click(btn);

        await user.click(btn);

        for(const sport of sports){
            expect(screen.queryByText(sport)).not.toBeInTheDocument();
        }

    });

})