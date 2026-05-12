const UserCard = (props) => {
    const {name, company, website, slogan, phone} = props;
    return (

            <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">

                <div className="h-2 bg-indigo-600"></div>

                <div className="p-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                        <p className="text-indigo-600 font-medium uppercase tracking-wider text-sm">{company}</p>
                    </div>

                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
                        <p className="italic text-gray-700 text-sm">
                            "{slogan}"
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                            </svg>
                            <a href="https://www.techflow.com" className="text-sm font-medium">{website}</a>
                        </div>

                        <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span className="text-sm font-medium">{phone}</span>
                        </div>
                    </div>

                    <button className="mt-8 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
                        Contact Me
                    </button>
                </div>
            </div>

    )
}

export default UserCard