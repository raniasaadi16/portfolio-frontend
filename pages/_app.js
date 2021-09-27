import 'tailwindcss/tailwind.css'
import Layout from '../components/layouts/Layout';
import Nav from '../components/layouts/Nav';
import '../style/App.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
