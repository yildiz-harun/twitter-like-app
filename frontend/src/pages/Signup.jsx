import { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContextProvider'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function Signup() {
  const { user, setUser } =
    useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] =
    useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await axios.post(
      'http://localhost:5000/api/user/signup',
      { email: email, password: password }
    )

    // save the user to local storage
    localStorage.setItem(
      'user',
      JSON.stringify(response)
    )
    setUser(response)
    console.log(response)
    setIsLoading(false)
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                value={email}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                value={password}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={isLoading}
            >
              Sign up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
