import { GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout';

//Propsの型を定義
interface Props {
  pageName: string;
}

export default function Students(props: Props): JSX.Element {
  return (
    <Layout>
      <div>{props.pageName}</div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (): Promise<{ props: Props }> => {
  return Promise.resolve({
    props: {
      pageName: 'this is pageName',
    },
  });
};
