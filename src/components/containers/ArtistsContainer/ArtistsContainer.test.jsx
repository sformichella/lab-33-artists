import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import ArtistsContainer from './ArtistsContainer';
import { AppProvider } from '../../../state/appContext';
import { MemoryRouter } from 'react-router-dom';

describe('Artists Container', () => {
  afterEach(() => cleanup());

  it('renders a list of artists on submit', async() => {
    render(
      <AppProvider>
        <MemoryRouter>
          <ArtistsContainer />
        </MemoryRouter>
      </AppProvider>
    );

    const submit = await screen.findByText('Search');
    const search = await screen.findByLabelText('Search:');

    fireEvent.change(search, {
      target: {
        value: 'KRS-One'
      }
    });

    fireEvent.click(submit);

    const list = await screen.findByTestId('list');

    return waitFor(() => {
      expect(list).not.toBeEmptyDOMElement();
    });
  });
});
