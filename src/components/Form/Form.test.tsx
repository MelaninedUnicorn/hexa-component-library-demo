import React from 'react';
import { render, screen } from '@testing-library/react';
import FormComponent from './Form';



test('renders the form component and its expected elements', () => {
    render(<FormComponent />);

    const boxComponent = screen.getByTestId("form-component");
    const textField = screen.getByTestId("color-code-input");
    const generateColorBtn = screen.getByTestId("generate-color-btn");
    const submitBtn = screen.getByTestId("submit-btn");
    
    expect(boxComponent).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
    expect(generateColorBtn).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
});