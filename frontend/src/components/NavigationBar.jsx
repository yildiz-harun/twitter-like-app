import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextProvider'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

function NavigationBar() {
  const { user, setUser } =
    useContext(AuthContext)

  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          Navbar with text
        </Navbar.Brand>
        {user && (
          <Navbar.Brand>
            <Navbar.Text>
              {user.email}
            </Navbar.Text>
            <Button
              onClick={() => {
                setUser(null)
              }}
            >
              Log out
            </Button>
          </Navbar.Brand>
        )}
        {!user && (
          <Navbar.Brand>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </Navbar.Brand>
        )}
      </Container>
    </Navbar>
  )
}

export default NavigationBar
