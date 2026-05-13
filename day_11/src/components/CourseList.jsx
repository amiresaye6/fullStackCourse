import CourseCard from './CourseCard'

const CourseList = ({ myCourses }) => {
    // console.log(props.myCourses);
    // const { myCourses } = props;

    // console.log(myCourses);


    // const image = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    // const name = "FullStack Couurse";
    // const rating = "5";
    // const price = "400";
    // const availableSeats = "8";

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8' >
            {
                myCourses.map((course) => {
                    return <CourseCard
                        key={course.id}
                        name={course.name}
                        price={course.price}
                        rating={course.rating}
                        availableSeats={course.availableSeats}
                        image={course.image}
                        bestSelling={course.bestSelling} // true / flase
                    />
                })
            }
        </div>
    )
}

export default CourseList