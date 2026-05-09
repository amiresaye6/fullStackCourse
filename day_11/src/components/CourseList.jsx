import CourseCard from './CourseCard'

const CourseList = () => {
    const image = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    const name = "FullStack Couurse";
    const rating = "5";
    const price = "400";
    const availableSeats = "8";

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8' >
            <CourseCard name={name} price={price} image={image} ratign={rating} availableSeats={availableSeats} />
            <CourseCard
                name="Backednd usign Express"
                price="500"
                ratign="4"
                availableSeats="20"
                image="heroLabtob.png"
            />
            <CourseCard
                name="Frontend usign React.js"
                price="500"
                ratign="3.5"
                availableSeats="15"
                image="heroLabtob.png"
            />
        </div>
    )
}

export default CourseList