import React from 'react'
import {useParams, useLocation, useHistory} from 'react-router-dom'

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    return (
        <div>
            <h2>User {fname} {lname}</h2>
            <p>My location is {location.pathname}</p>
            {
                location.pathname ==="/user/mazz/alam" ? ( <button onClick={()=>alert("You are awesome")}>Click me!</button> ) : null
            }
            <br/>
            {/* <button onClick={()=>history.goBack()}>Go Back</button> */}
            <button onClick={()=>history.push("/")}>Home</button>
        </div>
    )
}

// const User = ({match}) => {
//     return (
//         <div>
//             <h2>User {match.params.fname}</h2>
//         </div>
//     )
// }

export default User
