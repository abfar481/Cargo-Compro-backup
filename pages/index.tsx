import type { NextPage } from 'next'
import Head from 'next/head'
import { Header, ImgContainer, TextContainer } from './components/index'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Cargo Company </title>
        <meta name="description" content="A landing page for a cargo company." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main */}
      <main className='relative h-[90vh]'>
        <TextContainer />
        <ImgContainer />
      </main>

    </>
  )
}

export default Home
