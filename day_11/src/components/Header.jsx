import { Link } from "react-router"

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 border-b-gray-700 border px-8 bg-zinc-950">
        <div>
            <h1 className="text-2xl text-white font-bold">Amir Alsayed</h1>
        </div>
        <div className="flex gap-3 text-gray-500 text-xl">
            <Link className="hover:text-white hover:underline transition" to="/">Home</Link>
            <Link className="hover:text-white hover:underline transition" to="/about">About</Link>
            <Link className="hover:text-white hover:underline transition" to="/courses">Courses</Link>
            {/* <a className="hover:text-white hover:underline transition" href="#">Reviews</a> */}
        </div>
        <div className="flex gap-2 items-center">
            <a href="#" className="text-gray-400 font-bold hover:bg-indigo-400 hover:text-white  text-xl transition px-4 py-2 rounded-lg">Login</a>
            <button className="bg-indigo-400 text-white text-xl font-bold px-4 transition py-2 rounded-lg hover:bg-indigo-300">Get Started</button>
        </div>
    </div>
  )
}

export default Header