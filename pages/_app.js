import 'tailwindcss/tailwind.css'
import Layout from '../components/layouts/Layout';
import '../style/App.css';
import Router from 'next/router';
import { useState } from 'react';
import Loading from '../components/layouts/Loading';

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false)
  Router.events.on('routeChangeStart', () => {
    setloading(true)
  })
  Router.events.on('routeChangeComplete', () => {
    setloading(false)
  })
  return (
    <Layout>
      {loading && <Loading/>}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
