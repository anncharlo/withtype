import Link from 'next/link'
import Layout from '../components/Layout'
import { wowoinit, woworun } from '../wowolib/wowo';

const IndexPage = () => {
  const a = wowoinit();
  console.log(`"index.tsx" ${a} ${woworun()}`);
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
