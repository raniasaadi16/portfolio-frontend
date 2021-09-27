import Head from 'next/head'
import { Fragment } from 'react'
import Base from '../components/home/Base'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Rania's Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Base/>
    </Fragment>
  )
}
