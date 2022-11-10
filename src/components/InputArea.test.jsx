import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputArea from "./InputArea";

describe("InputArea", () => {
    it("should call onAdd method with added/typed todo in inputElement when add button clicked", () => {
        const onAdd = jest.fn();
        
        render(<InputArea onAdd={onAdd}/>);

        const inputElement = screen.getByPlaceholderText(/Add todo .../i);
        const buttonElement = screen.getByRole("button",  {name: 'Add'});

        userEvent.type(inputElement, "Should Complete react testing library");
        userEvent.click(buttonElement);

        expect(onAdd).toHaveBeenCalledWith("Should Complete react testing library");
    })

    it("should not call onAdd method if empty todo/string in inputElement when add button clicked", () => {
        const onAdd = jest.fn();
        
        render(<InputArea onAdd={onAdd}/>);

        const inputElement = screen.getByPlaceholderText(/Add todo .../i);
        const buttonElement = screen.getByRole("button", {name: 'Add'});

        userEvent.type(inputElement, "   ");
        userEvent.click(buttonElement);

        expect(onAdd).not.toHaveBeenCalled();
    })
})