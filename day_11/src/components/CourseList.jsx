import CourseCard from './CourseCard'

const CourseList = (props) => {
    const { courses } = props;

    return (
        <>

            {
                !courses && <div className='text-4xl font-bold text-white bg-indigo-400 h-72 flex items-center justify-center'>There is no Courses yet</div>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8' >


                {
                    courses.map((course, index) => {
                        return <CourseCard
                            key={index}
                            // key={course.id}
                            name={course.name}
                            price={course.price}
                            ratign={course.rating}
                            availableSeats={course.availableSeats}
                            image={course.image}
                        />
                    })
                }



            </div>

        </>
    )
}

export default CourseList