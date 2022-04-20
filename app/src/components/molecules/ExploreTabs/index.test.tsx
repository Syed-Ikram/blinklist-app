import React from 'react';
import { render, screen } from '@testing-library/react';
import ExploreTabs from './index' ;

test('renders ExploreTabs 1', () => {
  render(<ExploreTabs />);
  const TabElement = screen.getByLabelText("Explore by category");
  expect(TabElement).toBeInTheDocument();
});
test('renders ExploreTabs 2', () => {
  render(<ExploreTabs />);
  const TabElement = screen.getByLabelText("See recently added titles");
  expect(TabElement).toBeInTheDocument();
});