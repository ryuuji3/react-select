import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0'

import Select, { SelectProps } from '../../src/Select'

export default {
  title: 'Select',
  component: Select,
  args: {
    id: 'test',
    name: 'test',
    label: 'Select an option',
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
    ]
  }
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Basic = Template.bind({})