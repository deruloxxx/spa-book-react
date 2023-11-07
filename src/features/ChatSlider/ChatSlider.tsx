import { useEffect, useState } from 'react'
import { Slider } from '../../components/Slider/Slider.tsx'

export const ChatSlider = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const newHash = isOpen ? '#!chat=open' : '#!chat=close'
    window.history.pushState(null, '', newHash)
  }, [isOpen])

  return (
    <Slider handleSlider={isOpen} setHandleSlider={() => setIsOpen(!isOpen)} />
  )
}
