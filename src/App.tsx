import { ChatSlider } from './features/ChatSlider'
import '../src/assets/spa.css'
import '../src/assets/spa.shell.css'
import '../src/assets/spa.chat.css'
import { Header } from './features/Header'
import { Content } from './features/Content'
import { Footer } from './features/Footer'
import { Modal } from './features/Modal'

function App() {
  return (
    <>
      <div id={'spa'}>
        <Header />
        <Content />
        <Footer />
        <ChatSlider />
        <Modal />
      </div>
    </>
  )
}

export default App
