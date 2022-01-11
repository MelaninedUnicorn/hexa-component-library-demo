import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders the form component', () => {
  render(<App />);
  const formCompoent = screen.getByTestId('form-component');
  expect(formCompoent).toBeInTheDocument();
});
