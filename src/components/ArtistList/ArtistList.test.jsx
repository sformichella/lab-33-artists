import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArtistList from './ArtistList';
import { AppProvider } from '../../state/appContext';
import { MemoryRouter } from 'react-router-dom';

const artists = [{ 
  id: 'coolId',
  name: 'Cool Artist',
  image: 'cool-image.com' 
}];

describe('ArtistList component', () => {
  afterEach(() => cleanup());
  it('renders ArtistList', () => {
    const { asFragment } = render(
      <AppProvider>
        <MemoryRouter>
          <ArtistList
            artists={artists}
            type="artists"
          />
        </MemoryRouter>
      </AppProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
