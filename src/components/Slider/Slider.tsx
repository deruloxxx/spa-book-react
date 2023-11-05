import {FC} from "react";
import clsx from "clsx";

type props = {
  handleSlider: boolean
  setHandleSlider: () => void
}

export const Slider:FC<props> = ({handleSlider, setHandleSlider}) => {
  return (
    <div onClick={setHandleSlider} className={clsx(handleSlider ? 'is-open' : 'is-closed', "spa-slider")} title={handleSlider ? 'Click to retract' : 'Click to extend'}  />
  );
};
