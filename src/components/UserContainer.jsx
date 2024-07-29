import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/userSlice'

const UserContainer = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

  return (
    <>
        <h2>LIST OF USERS</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && user.length ? (
            <ul>
                    {user.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
            </ul>
        ) : null}
    </>
  )
}

export default UserContainer