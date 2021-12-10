import Link from 'next/link'
import Layout from '../components/Layout'
import { init, run } from '../wowolib/wowo';

const IndexPage = () => {
  return <> 
  <Layout title="withtype">
    <h1>Hello `withtype`</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
  </>
};

export default IndexPage
