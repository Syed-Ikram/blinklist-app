import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonComponent from './index' ;

test('renders learn react link', () => {
  render(<ButtonComponent variant='text'>Click</ButtonComponent>);
  const ButtonElement = screen.getByText('Click');
  expect(ButtonElement).toBeInTheDocument();
});