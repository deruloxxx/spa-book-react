import { FC } from 'react'
import { clsx } from 'clsx'

type Props = {
  handleSlider: boolean
  setHandleSlider: () => void
}

export const Slider: FC<Props> = ({ handleSlider, setHandleSlider }) => {
  return (
    <div className={clsx(handleSlider ? 'is-open' : 'is-closed', 'spa-chat')}>
      <div className="spa-chat-head">
        <div
          className="spa-chat-head-toggle"
          title={handleSlider ? 'Click to retract' : 'Click to extend'}
          onClick={setHandleSlider}
        >
          =
        </div>
        <div className="spa-chat-head-title">Chat</div>
      </div>
      <div className="spa-chat-closer">x</div>
      <div className="spa-chat-sizer">
        <div className="spa-chat-msgs"></div>
        <div className="spa-chat-box">
          <input type="text" />
          <div>send</div>
        </div>
      </div>
    </div>
  )
}
