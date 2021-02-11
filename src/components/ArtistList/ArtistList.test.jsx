import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArtistList from './ArtistList';

describe('ArtistList component', () => {
  afterEach(() => cleanup());
  it('renders ArtistList', () => {
    const { asFragment } = render(<ArtistList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
