import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Home from '../pages/index';
import { recipes } from '../data/recipes';

// Mock axios directly
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('index component', () => {
  it('renders data properly', async () => {
    const mockData = { data: recipes };

    // Mock returning your value
    mockedAxios.get.mockResolvedValue(mockData);

    const { findAllByText, findAllByRole, findByRole, findByText, getByRole } =
      render(<Home />);

    // All cards have been rendered
    const cards = await findAllByRole('card');
    expect(cards).toHaveLength(11);

    cards.forEach(async (card, id) => {
      expect(cards[id]).toHaveTextContent(recipes[id].title);
      const link = await findAllByRole('link');
      expect(link[id]).toHaveAttribute('href', recipes[id].author.url);
      expect(cards[id]).toHaveTextContent(recipes[id].author.name);
      const tags = cards[id].querySelectorAll('.tag');
      expect(tags).toHaveLength(recipes[id].tags.length);
      tags.forEach((tag, tagId) => {
        expect(tag).toHaveTextContent(recipes[id].tags[tagId]);
      });
    });
  });

  it('renders no data message properly', async () => {
    const mockData = { data: [] };

    // Mock returning your value
    mockedAxios.get.mockResolvedValue(mockData);

    const { findByText } = render(<Home />);
    const noRecipeMessage = await findByText('There is no recipe :(');
    expect(noRecipeMessage).toBeInTheDocument();
  });
});
