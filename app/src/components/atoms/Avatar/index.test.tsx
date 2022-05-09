import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarComponent from './index' ;

test('renders Avatar Component', () => {
  render(<AvatarComponent>C</AvatarComponent>);
  const AvatarElement = screen.getByText('C');
  expect(AvatarElement).toBeInTheDocument();
});