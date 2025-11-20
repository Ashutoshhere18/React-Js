import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser,getUser } from '../slices/userSlices'

export default function UserHomePage() {
    let { users, currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
        dispatch(fetchUser());
    }, [])
    return (
        
       <div>
        <h2>User:{currentUser.email}</h2>
          <div className='w-100 bg-black'>
               <ol className="list-group list-group-numbered">
                {users.map((user, index) => (
                    <div key={index}>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{user.email}</div>
                            Cras justo odio
                        </div>
                        <span className="badge bg-primary rounded-pill">14</span>
                    </li>
                    </div>
                ))}
            </ol>
         </div>
       </div>
        

    )
}