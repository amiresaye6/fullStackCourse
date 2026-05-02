
import './User.css';


function User() {
    return (
        <div className="bg-indigo-700 text-white">
            <Avatar />
            <h1>Amir Alsayed</h1>
        </div>
    )
}

function Avatar() {
    return (
        <img className="avatar" src="./heroLabtob.png" alt="avatar img" />
    )
}

export default User;