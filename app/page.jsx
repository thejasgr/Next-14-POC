import Feed from "@components/Feed"
import {} from 'react-dom'
const Home = () => {
  
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text test-center">Discover and Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool
        </p>
        <Feed/>
    </section>
  )
}

export default Home