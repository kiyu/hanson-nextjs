import { styles } from './styles.css';

export default function GlobalHeader(): JSX.Element {
  return (
    <>
      <div className="GlobalHeader">
        <h1 className="GlobalHeader_h">Next.js Hands On Page</h1>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
