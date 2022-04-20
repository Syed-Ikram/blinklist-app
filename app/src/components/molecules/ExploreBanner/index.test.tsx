import React from 'react';
import { render, screen } from '@testing-library/react';
import ExploreBanner from './index' ;

test('renders Banner', () => {
  render(<ExploreBanner />);
  const BannerElement = screen.getByText('Explore Books on entrepreneurship');
  expect(BannerElement).toBeInTheDocument();
});