import { useEffect, useState } from "react"
import UserCard from "../components/UserCard";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsersData = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) {
                    throw new Error("Error Fetching Users Data");
                }
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsersData();
    }, [])

    console.log(users);


    return (

        // name, email, phone, website, comapny.name
        <>

            {
                error &&
                <h3 className="bg-red-400 text-white text-2xl px-4 py-2 m-2 text-center">{error}</h3>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8' >
                {
                    isLoading ?
                        <div class="flex justify-center items-center">
                            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        </div> :
                        users.map(user => {
                            return <UserCard key={user.id} user={user} />
                        })
                }

            </div>
        </>
    )
}

export default Users