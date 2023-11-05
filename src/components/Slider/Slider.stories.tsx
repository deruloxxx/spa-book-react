import type {Meta, StoryObj} from '@storybook/react';

import { Slider } from './Slider';
import '../../../public/globals.css';
import {useState} from "react";

const meta = {
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

const Template = () =>{
  const [handleSlider, setHandleSlider] = useState(false)
  return <Slider handleSlider={handleSlider} setHandleSlider={() => setHandleSlider(!handleSlider)} />
}

export const Default: Story = {
  render: () => <Template />,
};
