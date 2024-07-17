import { render } from '@testing-library/react';

import ClientRecipes from './client-recipes';

describe('ClientRecipes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientRecipes />);
    expect(baseElement).toBeTruthy();
  });
});
