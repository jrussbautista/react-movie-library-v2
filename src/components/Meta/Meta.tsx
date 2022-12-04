import { Helmet } from 'react-helmet';

type MetaProps = {
  title: string;
};

const Meta = ({ title }: MetaProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
};

export default Meta;
