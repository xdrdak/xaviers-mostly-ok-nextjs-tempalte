import * as React from 'react';
import { render } from '@testing-library/react';

import { Test } from './Test';

describe('Some sample Test', () => {
  it('should work', () => {
    const { getByText } = render(<Test />);

    expect(getByText('test')).toBeTruthy();
  });
});
