import heroImg from './assets/hero.png'

function HomePage() {
    return (
        <div className="flex items-center justify-center flex-col gap-5 container">
            <h1 className="text-white text-8xl font-bold text-center">
                From Web Basics to <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-indigo-600">Full-Stack Master.</span>
            </h1>
            <p className="text-3xl text-zinc-400 text-center max-w-[80%] pt-8">A 6-week intensive journey covering HTML, CSS, JavaScript, React, and Backend Development. Build real-world projects with a practical-first approach.</p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
                <button className="bg-indigo-400 text-white p-8 text-2xl rounded-lg">Get Started</button>
                <button className="bg-zinc-900 border-zinc-800 text-indigo-500 p-8 text-2xl rounded-lg">View Curriculum</button>
            </div>
            <img className='w-full ' src={heroImg} alt="test" />

        </div>
    )
}

export default HomePage;