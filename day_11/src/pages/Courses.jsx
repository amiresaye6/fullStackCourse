import Header from "../components/Header"
import CourseList from "../components/CourseList";

const Courses = () => {

    const courses = [
        {
            id: "CS-101",
            name: "Complete React & Next.js Guide",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
            rating: 4.9,
            price: 129.99,
            availableSeats: 5,
        },
        {
            id: "CS-102",
            name: "Mastering Node.js & Express",
            image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?auto=format&fit=crop&w=800&q=80",
            rating: 4.7,
            price: 89.99,
            availableSeats: 12,
        },
        {
            id: "CS-103",
            name: "Tailwind CSS from Scratch",
            image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
            rating: 4.8,
            price: 49.99,
            availableSeats: 20,
        },
        {
            id: "CS-104",
            name: "Advanced MongoDB & Mongoose",
            image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
            rating: 4.6,
            price: 99.99,
            availableSeats: 3,
        },
        {
            id: "CS-105",
            name: "Full Stack Laravel Bootcamp",
            image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
            rating: 4.9,
            price: 159.99,
            availableSeats: 7,
        },
        {
            id: "CS-106",
            name: "Python for Data Science",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP4ne9cXs0QjuztZ5qHYXni4CrnoA325yuA&s",
            rating: 4.5,
            price: 119.99,
            availableSeats: 15,
        },
        {
            id: "CS-107",
            name: "Deployment with Docker & AWS",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm2blcFgPAJR9-34taWiQ9WtS-87FKFD5LFQ&s",
            rating: 4.8,
            price: 139.99,
            availableSeats: 4,
        },
        {
            id: "CS-108",
            name: "UI Design Principles for Devs",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
            rating: 4.7,
            price: 69.99,
            availableSeats: 25,
        },
        {
            id: "CS-109",
            name: "TypeScript Deep Dive",
            image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
            rating: 4.9,
            price: 79.99,
            availableSeats: 10,
        },
        {
            id: "CS-110",
            name: "Building AI Apps with LangChain",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
            rating: 5.0,
            price: 199.99,
            availableSeats: 2,
        }
    ];



    return (
        <>
            <Header />
            {courses && <>
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-center"><span className="text-indigo-600">{courses.length}</span> Coureses available right now</h1>
                </div>
            </>}
            <CourseList courses={courses} />
        </>
    )
}

export default Courses