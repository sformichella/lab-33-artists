import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArtistListItem from './ArtistListItem';

describe('ArtistListItem component', () => {
  afterEach(() => cleanup());
  it('renders ArtistListItem', () => {
    const { asFragment } = render(<ArtistListItem
      name="Michael Jackson"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
