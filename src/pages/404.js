import Link from 'next/link';
import Layout from '../components/layout';

const Custom404 = () => (
    <Layout>
        <h1>404</h1>
        <p>This page does not exists. Please return to
            <Link href="/">
                <a> Home</a>
            </Link>
        </p>
    </Layout>
)

export default Custom404;