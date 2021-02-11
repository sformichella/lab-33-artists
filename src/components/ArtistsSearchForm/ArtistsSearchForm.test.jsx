import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArtistsSearchForm from './ArtistsSearchForm';

describe('ArtistsSearchForm component', () => {
  afterEach(() => cleanup());
  it('renders ArtistsSearchForm', () => {
    const { asFragment } = render(<ArtistsSearchForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});
