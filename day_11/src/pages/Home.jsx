import CourseList from "../components/CourseList"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import Hero from "../components/Hero"

function Home() {
    return (
        <div className="bg-zinc-950 min-h-screen ">
            <Header />
            {/* <Hero /> */}
            {/* <CourseList /> */}
            <Footer />
        </div>
    )
}

export default Home