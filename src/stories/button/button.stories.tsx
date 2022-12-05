import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconUser, IconPlus } from '@tabler/icons'
import { Button } from './button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    background: { control: 'color' },
    label: {
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const IconLeft = Template.bind({})
IconLeft.args = {
  iconLeft: <IconUser />,
}

export const IconRight = Template.bind({})
IconRight.args = {
  iconRight: <IconPlus />,
}
