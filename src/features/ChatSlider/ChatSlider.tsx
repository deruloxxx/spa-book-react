import { Slider } from '@/components/Slider/Slider'
import { useState } from 'react'

export const ChatSlider = () => {
  const [handleSlider, setHandleSlider] = useState(false)

  return (
    <Slider
      handleSlider={handleSlider}
      setHandleSlider={() => setHandleSlider(!handleSlider)}
    />
  )
}
