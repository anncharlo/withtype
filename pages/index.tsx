import Link from 'next/link'
import Layout from '../components/Layout'
import { init, run } from '../libs/christmas';

const IndexPage = () => {
  console.log(`"index.tsx" ${init()} ${run()}`);
  return <> 
  <Layout title="withtype">
    <h1>Hello `withtype`</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  <div id="christmas" />
  </Layout>
  </>
};

export default IndexPage
