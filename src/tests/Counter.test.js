// import necessary react testing library helpers here
// import the Counter component here
import React from 'react'
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  //render(<Counter />);
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(Number(screen.getByTestId("count").textContent)).toEqual(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  let countTest = Number(screen.getByTestId("count").textContent);
  fireEvent.click(screen.getByRole('button', {name: /\+/i}));
  expect(Number(screen.getByTestId("count").textContent)).toEqual(countTest + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  let countTest = Number(screen.getByTestId("count").textContent);
  fireEvent.click(screen.getByRole('button', {name: /\-/i}));
  expect(Number(screen.getByTestId("count").textContent)).toEqual(countTest - 1);
});
