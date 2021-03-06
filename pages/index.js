import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/Layout'
import Post from '../src/components/Home'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post/>
    </Layout>
  )
}
