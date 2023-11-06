import { ChatSlider } from '@/features/ChatSlider'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SPA</title>
      </Head>
      <main>
        <div id={'spa'}>
          <ChatSlider />
        </div>
      </main>
    </>
  )
}
