import { useState } from "react";

const CourseCard = (props) => {

    let { name, price, rating, availableSeats, image, bestSelling } = props;
    // console.log(props);

    // let myseets = availableSeats;
    const [available, setAvailable] = useState(availableSeats);
    const [clicked, setClicked] = useState(false);

    // console.log("Card component renderd", name);
    

    const decreaseSeats = () => {
        console.log("clicked", name);
        if (clicked === false) {
            setAvailable(available - 1);

            const enrolledCourses = JSON.parse(localStorage.getItem("myCourses")) || [];
            enrolledCourses.push(props);
            localStorage.setItem("myCourses", JSON.stringify(enrolledCourses));

            setClicked(true)
        }
    }

    return (
        <div className="w-full max-w-sm bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden transition-all duration-200">

            {/* Course Image */}
            <img
                className="w-full h-48 object-cover"
                src={image}
                alt={name}
            />

            <div className="p-5">

                {/* Course Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                    {props.name}
                </h3>
                {/* <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                    {props.myPrice}
                </h3> */}

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-500">{rating}</span>
                </div>


{/*  conditional renderign  */}

                {/* {
                    bestSelling === true ? (
                        <div className="text-white bg-indigo-300 px-4 py-2 rounded-lg">
                            <h3>Best Selling</h3>
                        </div>
                    ) : (
                        <></>
                    )
                } */}

                {
                    bestSelling &&
                    <div className="text-indigo-500">
                        <h3>Best Selling</h3>
                    </div>
                }


                {/* Price & Available Seats */}
                <div className="flex justify-between items-center mb-5">
                    <span className="text-xl font-bold text-gray-900">$ {price}</span>
                    <span className="text-sm font-medium text-rose-500">{available} seats left</span>
                </div>

                {/* Action Button */}
                <button onClick={decreaseSeats} className={clicked ? "w-full bg-green-900 hover:bg-green-800 text-white font-medium py-2.5 rounded-lg transition-colors duration-200" : "w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"}>
                    {clicked ? "Enrolled" : "Enroll Now"}
                </button>

            </div>
        </div>

    )
}

export default CourseCard