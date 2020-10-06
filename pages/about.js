import Layout from "./components/Layout";

const AboutPage = (props) => (
    <Layout>
      <div className=".contianer-fluid">
        <h1>About</h1>
        <div className=".col-md-6">
          <p>
          My name is Michael and I am a graduate of Oregon State University with a Bachelor's Degree in Computer Science. I made this website
          using Next.js, a framework for React focusing on server-side rendering. I also have experience in Python using Django, and C# using the .NET Core 
          framework. 
          </p>
        </div>
      </div>
    </Layout>
)

export default AboutPage;