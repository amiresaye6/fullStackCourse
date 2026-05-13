import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Users from "./pages/Users"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
