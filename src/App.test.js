import { render, screen } from '@testing-library/react';
import App from './App';

test('renders worq in progress text', () => {
  render(<App />);
  const p = screen.getByText(/This website is a worq in progress./i);
  expect(p).toBeInTheDocument();
});
