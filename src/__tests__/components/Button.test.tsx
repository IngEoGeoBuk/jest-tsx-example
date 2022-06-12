import { render } from '@testing-library/react'
import Button from "../../components/Button";
import userEvent from "@testing-library/user-event";

describe('Button Component', () => {
    it('rendered button', () => {
        const { getByTestId } = render(<Button />)
        const button = getByTestId('button-show')
        expect(button).toBeTruthy();
    });

    it('you can find button-hide after button-show click', async () => {
        const { getByTestId } = render(<Button />)
        const buttonShow = getByTestId('button-show')
        
        // 이거 주석처리하면 false 처리 됨
        userEvent.click(buttonShow);

        const buttonHide = getByTestId('button-hide')
        expect(buttonHide).toBeTruthy();
    });
})