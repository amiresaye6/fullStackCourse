const UserCard = ({user}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{user.name}</h3>

            <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                    <span className="font-semibold w-20 text-gray-400">Email:</span> {user.email}
                </p>
                <p className="flex items-center">
                    <span className="font-semibold w-20 text-gray-400">Phone:</span> {user.phone}
                </p>
                <p className="flex items-center">
                    <span className="font-semibold w-20 text-gray-400">Website:</span>
                    <span className="text-blue-600 hover:underline">{user.website}</span>
                </p>
                <p className="flex items-center">
                    <span className="font-semibold w-20 text-gray-400">Company:</span> {user.company.name}
                </p>
            </div>
        </div>
    )
}

export default UserCard