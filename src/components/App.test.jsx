import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("InputArea", () => {
    it("should render todos with added/typed todo in inputElement when add button clicked", () => {
        render(<App/>);

        const inputElement = screen.getByPlaceholderText(/Add todo .../i);
        const buttonElement = screen.getByRole("button",  {name: 'Add'});

        userEvent.type(inputElement, "Should Complete react testing library");
        userEvent.click(buttonElement);  
        
        const listItem = screen.getByText(/Should Complete react testing library/i);

        expect(listItem).toBeInTheDocument();
    })

    it("should render multiple todos with added/typed todo in inputElement when add button clicked", () => {
        render(<App/>);

        const inputElement = screen.getByPlaceholderText(/Add todo .../i);
        const buttonElement = screen.getByRole("button",  {name: 'Add'});

        userEvent.type(inputElement, "Should Complete react testing library 1");
        userEvent.click(buttonElement);  
        userEvent.type(inputElement, "Should Complete react testing library 2");
        userEvent.click(buttonElement);  
        userEvent.type(inputElement, "Should Complete react testing library 3");
        userEvent.click(buttonElement);  
        
        const listItems = screen.getAllByText(/Should Complete react testing library/i);

        expect(listItems.length).toBe(3);
        expect(listItems[0].textContent).toBe("Should Complete react testing library 1");
        expect(listItems[1].textContent).toBe("Should Complete react testing library 2");
        expect(listItems[2].textContent).toBe("Should Complete react testing library 3");
    })

    it("should delete the todos when delete button clicked in deleteconfirmationBox", () => {
        render(<App/>);
        const inputElement = screen.getByPlaceholderText(/Add todo .../i);
        const buttonElement = screen.getByRole("button",  {name: 'Add'});

        userEvent.type(inputElement, "Should Complete react testing library");
        userEvent.click(buttonElement);  

        const listItem = screen.getByText(/Should Complete react testing library/i);
        expect(listItem).toBeInTheDocument();

        const deleteIconToClick = screen.getByTestId("deleteIcon");
        userEvent.click(deleteIconToClick);
        const deleteButtonInConfirmationDialog = screen.getByTestId("todoitem");
        userEvent.click(deleteButtonInConfirmationDialog);

        const listItemdeleted = screen.queryByText(/Should Complete react testing library/i);
        expect(listItemdeleted).toBeNull();       
    })    
})