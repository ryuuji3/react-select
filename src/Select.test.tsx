import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Select from './Select';

test('renders dropdown and its options', () => {
    const { getByLabelText } = render(
      <Select 
          id="test" 
          name="test" 
          options={[
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
            { value: 'C', label: 'C' },
          ]}
          label="Select me"
      />
    );

    const dropdown = getByLabelText(/select me/i)

    expect(dropdown).toHaveDisplayValue('') // nothing selected

    userEvent.selectOptions(dropdown, 'A')

    expect(dropdown).toHaveDisplayValue('A')
    expect(dropdown).toHaveValue('a')
})
