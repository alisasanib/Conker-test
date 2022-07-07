import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import Home from '../pages/recipe/[id]/index';
import { recipes } from '../data/recipes';

// Mock axios directly
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/recipe/0',
      pathname: '',
      query: { id: '0' },
      asPath: '',
    };
  },
}));
describe('index component', () => {
  it('renders correct data', async () => {
    const mockData = { data: recipes[0] };

    // Mock returning your value
    mockedAxios.get.mockResolvedValue(mockData);

    const { findAllByText, findAllByRole, findByRole, findByText, getByRole } =
      render(<Home />);

    const title = await findByRole('title');
    const description = await findByRole('description');
    const author = await findByRole('author');
    const tags = await findAllByRole('tag');
    const ingredients = await findAllByRole('ingredient');
    const directions = await findAllByRole('direction');

    expect(description).toHaveTextContent('This recipe has been');
    expect(title).toHaveTextContent('Banana Oatmeal Cookie');
    expect(author).toHaveTextContent('By: Blair Bunny');
    expect(tags).toHaveLength(2);
    expect(ingredients).toHaveLength(11);
    expect(directions).toHaveLength(5);

    //tags texts rendered properly
    expect(tags[0]).toHaveTextContent('dessert');
    expect(tags[1]).toHaveTextContent('fruit');

    //ingredients texts rendered properly
    expect(ingredients[0]).toHaveTextContent(
      '1 1/2 cups sifted all-purpose flour'
    );
    expect(ingredients[1]).toHaveTextContent('1/2 teaspoon baking soda');
    expect(ingredients[2]).toHaveTextContent('1 teaspoon salt');

    //directions texts rendered properly
    expect(directions[0]).toHaveTextContent('Step 1');
    expect(directions[0]).toHaveTextContent(
      'Preheat oven to 400 degrees F (200 degrees C).'
    );

    expect(directions[1]).toHaveTextContent('Step 2');
    expect(directions[1]).toHaveTextContent(
      'Sift together the flour, baking soda, salt, nutmeg and cinnamon.'
    );

    expect(directions[2]).toHaveTextContent('Step 3');
    expect(directions[2]).toHaveTextContent(
      'Cream together the shortening and sugar; beat until light and fluffy. Add egg, banana, oatmeal and nuts. Mix well.'
    );
  });
});
