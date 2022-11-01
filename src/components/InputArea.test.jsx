import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputArea from "./InputArea";

describe("InputArea", () => {
    it("should render the InputArea Component without crashing", () => {
        render(<InputArea/>);
    })
})