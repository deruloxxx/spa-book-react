import { useState } from 'react'
import { Slider } from '../../components/Slider/Slider.tsx'

export const ChatSlider = () => {
  const [handleSlider, setHandleSlider] = useState(false)

  return (
    <Slider
      handleSlider={handleSlider}
      setHandleSlider={() => setHandleSlider(!handleSlider)}
    />
  )
}
