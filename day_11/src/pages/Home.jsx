import { useEffect, useState } from "react";
import CourseList from "../components/CourseList"
import Footer from "../components/Footer"
import Header from "../components/Header"
// import Hero from "../components/Hero"

function Home() {


    const courses = [
        {
            id: "CS-101",
            name: "Complete React & Next.js Guide",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
            rating: 4.9,
            price: 129.99,
            availableSeats: 5,
            bestSelling: true,
        },
        {
            id: "CS-102",
            name: "Mastering Node.js & Express",
            image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?auto=format&fit=crop&w=800&q=80",
            rating: 4.7,
            price: 89.99,
            bestSelling: false,
            availableSeats: 12,
        },
        {
            id: "CS-103",
            name: "Tailwind CSS from Scratch",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
            rating: 4.8,
            price: 49.99,
            bestSelling: false,
            availableSeats: 20,
        },
        {
            id: "CS-104",
            name: "Advanced MongoDB & Mongoose",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
            rating: 4.6,
            price: 99.99,
            bestSelling: false,
            availableSeats: 3,
        },
        {
            id: "CS-105",
            name: "Full Stack Laravel Bootcamp",
            image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
            rating: 4.9,
            price: 159.99,
            bestSelling: true,
            availableSeats: 7,
        },
        {
            id: "CS-106",
            name: "Python for Data Science",
            image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80",
            rating: 4.5,
            price: 119.99,
            bestSelling: false,
            availableSeats: 15,
        },
        {
            id: "CS-107",
            name: "Deployment with Docker & AWS",
            image: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?auto=format&fit=crop&w=800&q=80",
            rating: 4.8,
            price: 139.99,
            bestSelling: false,
            availableSeats: 4,
        },
        {
            id: "CS-108",
            name: "UI Design Principles for Devs",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
            rating: 4.7,
            price: 69.99,
            bestSelling: true,
            availableSeats: 25,
        },
        {
            id: "CS-109",
            name: "TypeScript Deep Dive",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
            rating: 4.9,
            price: 79.99,
            bestSelling: false,
            availableSeats: 10,
        },
        {
            id: "CS-110",
            name: "Building AI Apps with LangChain",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
            rating: 5.0,
            price: 199.99,
            bestSelling: false,
            availableSeats: 2,
        }
    ];

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Home page rerenderd");
        console.log(counter);
        // setCounter(counter + 1);
    }, [counter]);

    return (
        <div className="bg-zinc-950 min-h-screen ">
            <Header />
            {/* <Hero /> */}
            <h1 className="text-indigo-300 text-8xl">{counter}</h1>
            <button className="text-white bg-indigo-400 px-4 py-2 rounded-lg" onClick={() => setCounter(counter + 1)}>click to increase</button>
            <CourseList myCourses={courses} />\


            <Footer />
        </div>
    )
}

export default Home