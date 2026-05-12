import { useEffect, useState } from "react"
import Header from "../components/Header"
import UserCard from "../components/UserCard"

const About = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok)
                    throw new Error("can not fetch users data");
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.log("error fetch users, ", error.message);
                setError("failed to fetch users data");
            } finally {
                setIsLoading(false)
            }
        }
        fetchUsers();
    }, [])

    return (
        <>
            <Header />
            {error && <div className="text-red-500 text-center mt-4"> {error} </div>}

            {isLoading ?
                (

                    <div className="flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    </div>

                ) :
                (

                    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8' >

                        {users.map(user => {

                            return <UserCard
                                key={user.id}
                                name={user.name}
                                company={user.company.name}
                                website={user.website}
                                slogan={user.company.bs}
                                phone={user.phone}
                            />
                        })}

                    </div>
                )}
        </>
    )
}

export default About