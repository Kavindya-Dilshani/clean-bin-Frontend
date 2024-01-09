import About from "../Components/about/About"
import Banner from "../Components/banner/Banner";
import Hero from "../Components/hero-section/Hero"
import Process from "../Components/process/Process";
import Service from "../Components/service/Service";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Process />
            <Banner />
            <Service />
        </div>
    )
}

export default Home;
