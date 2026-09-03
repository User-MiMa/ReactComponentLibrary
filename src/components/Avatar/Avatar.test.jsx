
import { render, screen } from "@testing-library/react";
import { IoPersonSharp } from "react-icons/io5";
import Avatar from "./Avatar";

describe("Avatar test suite",()=>{

    test("Avatar without content displays svg",()=>{

        render(
            <Avatar/>
        );

        const avatarContainer = document.querySelector("div");

        expect(avatarContainer.querySelector("svg")).toBeInTheDocument();

    });

    test("Avatar with img is displayed with expected src/alt",()=>{

        render(
            <Avatar src="./imgs/pfp.png" alt="Profile Picture" />
        );

        const avatarImg = screen.getByRole("img");

        expect(avatarImg).toBeInTheDocument();
        expect(avatarImg).toHaveAttribute("src", "./imgs/pfp.png");
        expect(avatarImg).toHaveAttribute("alt","Profile Picture");

    });

    test("Avatar with text is displayed with expected text",()=>{

        render(
            <Avatar>User Name</Avatar>
        );

        const avatarContainer = document.querySelector("div");

        expect(avatarContainer).toBeInTheDocument();
        expect(avatarContainer.textContent).toBe("User Name");

    });

});