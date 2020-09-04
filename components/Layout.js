import Header from "./Header";
import Head from 'next/head';

function Layout(props) {
    return(
        <div className="layout">
            <Head>
                <title>Michael's website</title>
            </Head>
            <Header />
            {props.children}
        </div>
    );
}

export default Layout;