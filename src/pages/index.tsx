import Head from 'next/head';
import Layout, { siteTitle } from '../components/shared/layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>Nextjs Typescript template</section>
    </Layout>
  );
}
