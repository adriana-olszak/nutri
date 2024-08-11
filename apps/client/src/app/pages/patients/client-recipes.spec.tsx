import { render } from '@testing-library/react';

import Patients from './Patients';

describe('ClientRecipes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Patients />);
    expect(baseElement).toBeTruthy();
  });
});
