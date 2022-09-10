import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextProvider'

function Navbar() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <div>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={() => {}}>
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
