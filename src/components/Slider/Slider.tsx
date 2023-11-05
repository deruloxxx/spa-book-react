import {FC} from "react";
import clsx from "clsx";

type Props = {
  handleSlider: boolean
  setHandleSlider: () => void
}

export const Slider:FC<Props> = ({handleSlider, setHandleSlider}) => {
  return (
    <div onClick={setHandleSlider} className={clsx(handleSlider ? 'is-open' : 'is-closed', "spa-slider")} title={handleSlider ? 'Click to retract' : 'Click to extend'}  />
  );
};
