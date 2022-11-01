import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoItem from "./ToDoItem"

describe("ToDoItem",() => {
    it("should render the ToDoItem Component with provided props as text", () => {
        render(<ToDoItem text="Should Complete react testing library"/>);
        
        const listItem = screen.getByText(/Should Complete react testing library/i);

        expect(listItem).toBeInTheDocument();
    })

    it("should call the dummy deleteItem Method passed as props with name onChecked when clicked", () => {
        const onChecked = jest.fn();
        render(<ToDoItem id={"1"} text="Should Complete react testing library" onChecked = {onChecked}/>);
        
        const listItem = screen.getByText(/Should Complete react testing library/i);
        const listItemToClick = screen.getByTestId("todoitem");
        userEvent.click(listItemToClick);
        
        expect(onChecked).toHaveBeenCalledWith("1");
    })
})