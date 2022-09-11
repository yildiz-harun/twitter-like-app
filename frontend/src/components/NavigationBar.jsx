import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContextProvider'
import { PostsContext } from '../contexts/PostsContextProvider'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

function NavigationBar() {
  const { user, setUser } =
    useContext(AuthContext)
  const { posts, setPosts } =
    useContext(PostsContext)

  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          Twitter Like App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {!user && (
            <Nav>
              <Nav.Link href="/login">
                Log in
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="/signup"
              >
                Sign up
              </Nav.Link>
            </Nav>
          )}
          {user && (
            <Nav>
              <Navbar.Text>
                {user.data.email}
              </Navbar.Text>
              <Nav.Link
                onClick={() => {
                  // remove user from storage
                  localStorage.removeItem('user')
                  setPosts([]) //////////////////////////////////////////////
                  setUser(null)
                }}
              >
                Log out
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
