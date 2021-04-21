import Head from 'next/head';
import GlobalHeader from '../global-header';
import { styles } from './styles.css';

export const siteTitle = 'Next.js Typescript テンプレート';

export default function Layout({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  return (
    <>
      <div className="container">
        <GlobalHeader></GlobalHeader>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Next.js Typescript テンプレート" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
