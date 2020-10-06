import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>Michael's Portfolio</title>
      <link rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/superhero/bootstrap.min.css"/>
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;