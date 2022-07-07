import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Home from '../pages/results';
import { recipes } from '../data/recipes';

// Mock axios directly
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/results',
      pathname: '',
      query: { search: 'banana' },
      asPath: '',
    };
  },
}));

describe('search component', () => {
  it('renders search data correctly', async () => {
    const mockData = { data: [recipes[0]] };

    // Mock returning your value
    mockedAxios.get.mockResolvedValue(mockData);

    const { findAllByText, findAllByRole, findByRole, findByText, getByRole } =
      render(<Home />);

    // All cards have been rendered
    const cards = await findAllByRole('card');
    expect(cards).toHaveLength(1);

    // titles rendered properly

    expect(cards[0]).toHaveTextContent('Banana Oatmeal Cookie');

    expect(cards[0]).not.toHaveTextContent('Black Bean and Rice Enchiladas');

    // authors rendered properly
    expect(cards[0]).toHaveTextContent('Blair Bunny');

    //tags rendered properly
    const tags = await findAllByRole('tag');
    expect(tags).toHaveLength(2);
    expect(tags[0]).toHaveTextContent('dessert');
    expect(tags[1]).toHaveTextContent('fruit');
  });
});
