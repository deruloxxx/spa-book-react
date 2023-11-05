import {Slider} from "@/components/Slider/Slider";
import {useState} from "react";

export default function Home() {
  const [handleSlider, setHandleSlider] = useState(false)
  return (
    <main>
      <div id={"spa"}>
        <Slider handleSlider={handleSlider} setHandleSlider={() => setHandleSlider(!handleSlider)} />
      </div>
    </main>
  )
}
