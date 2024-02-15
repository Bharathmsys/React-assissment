import { render, screen } from '@testing-library/react';
import Home from './Components/Home'
test('con', () => {
  render(<Home />);
  const linkElement = screen.getByTestId("con");
  expect(linkElement).toBeInTheDocument();
});
