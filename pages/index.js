import Layout from "./components/Layout";

import styles from '../styles/mainpage.module.css';

const HomePage = (props) => (
    <Layout>
      <div className={styles.mainPage}>
                <div className={styles.sidebar}>
                    <img className={styles.img} src="profile.jpg" alt="Profile" />
                    <p>
                        Hello! My name is Michael Gillett. I am a recent graduate with a degree in Computer Science looking for a Software Developer job. I made this
                        website using React.js and Typescript, with the hosting done through AWS Amplify.
                        <br />
                        <br />
                        Twitter: <a href="https://www.twitter.com/MichaelDotPy">@MichaelDotPy</a>
                        <br />
                        Github: <a href="https://www.github.com/gillemic">github.com/gillemic</a>
                        <br />
                        Linkedin: <a href="https://www.linkedin.com/in/gillemic/">https://www.linkedin.com/in/gillemic/</a> 
                    </p>
                </div>
                <div className={styles.mainPageBody}>
                    <p>
                        Just added a tetris page! It can be accessed via the Navigation bar at the 
                        top of the page. 
                    </p>
                    <p>
                        Finally got the Resume page working! It was tougher than I thought to
                        render a PDF and after several failed ReactJS/npm packages, the JSX attribute
                        &lt;iframe&gt; with the pdf as the source
                    </p>
                    <p>
                        Todo list page is up! My first react project, made from create-react-app. Hope to
                        add additional features such as list-saving or multiple lists!
                    </p>
                </div>
            </div>
    </Layout>
)

export default HomePage;