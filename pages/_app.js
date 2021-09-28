import 'tailwindcss/tailwind.css'
import Layout from '../components/layouts/Layout';
import '../style/App.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
