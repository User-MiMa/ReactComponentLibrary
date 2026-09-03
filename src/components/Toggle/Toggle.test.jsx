
import Toggle from "./Toggle";
import ToggleButton from "./ToggleButton";
import ToggleDisplay from "./ToggleDisplay";
import MenuWithToggle from "../MenuWithToggle/MenuWithToggle";
import MenuWithToggleButton from "../MenuWithToggle/MenuWithToggleButton";
import MenuDropdownWithToggle from "../MenuWithToggle/MenuDropdownWithToggle";
import MenuDropdownItem from "../Menu/MenuDropdownItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Toggle unit test suite",()=>{

    test("Toggle displays children",()=>{

        render(<Toggle><button>Child content</button></Toggle>);

        const toggleChild = screen.getByRole("button");

        expect(toggleChild).toBeInTheDocument();
        expect(toggleChild.textContent).toBe("Child content");

    });

    test("ToggleButton displays children",()=>{

        render(<Toggle><ToggleButton><button>Child content 2</button></ToggleButton></Toggle>);

        const toggleButtonChild = screen.getByRole("button");

        expect(toggleButtonChild).toBeInTheDocument();
        expect(toggleButtonChild.textContent).toBe("Child content 2");

    });

    test("ToggleDisplay has hidden children on first render",()=>{

        render(<Toggle><ToggleDisplay><span>Child content 3</span></ToggleDisplay></Toggle>);

        expect(document.querySelector("span")).not.toBeInTheDocument();
        expect(screen.queryByText("Child content 3")).not.toBeInTheDocument();

    });


});

describe("Toggle integration test suite",()=>{

    const food = ["Rice", "Soup", "Apple", "Cereal"];

    function renderToggle(){
        
        render(
            <Toggle>
                <MenuWithToggle>
                    <ToggleButton>
                        <MenuWithToggleButton>
                            Food
                        </MenuWithToggleButton>
                    </ToggleButton>
                    <ToggleDisplay>
                        <MenuDropdownWithToggle>
                            {food.map(plate=>(<MenuDropdownItem key={plate}>{plate}</MenuDropdownItem>))} 
                        </MenuDropdownWithToggle>
                    </ToggleDisplay>
                </MenuWithToggle>
            </Toggle>
        );

    }

    test("ToggleButton event bubbling executes displaying dropdown content", async ()=>{

        const user = userEvent.setup();
        renderToggle();
        const btn = screen.getByText("Food");

        await user.click(btn);

        for(const foodItem of food){
            expect(screen.getByText(foodItem)).toBeInTheDocument();
        }

    });

    test("ToggleButton hides content again on 2nd click", async ()=>{

        const user = userEvent.setup();
        renderToggle();
        const btn = screen.getByText("Food");

        await user.click(btn);
        await user.click(btn);

        for(const foodItem of food){
            expect(screen.queryByText(foodItem)).not.toBeInTheDocument();
        }

    });

});