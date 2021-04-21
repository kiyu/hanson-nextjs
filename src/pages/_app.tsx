import '../styles/global.css';
import { ComponentClass } from 'react';

interface Props {
  Component: ComponentClass;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  pageProps: any;
}

export default function App({ Component, pageProps }: Props): JSX.Element {
  return <Component {...pageProps} />;
}
