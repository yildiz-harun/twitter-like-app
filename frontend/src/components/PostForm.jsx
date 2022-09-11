import axios from 'axios'
import { useContext, useState } from 'react'
import { PostsContext } from '../contexts/PostsContextProvider'
import { AuthContext } from '../contexts/AuthContextProvider'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BsFillCursorFill } from 'react-icons/bs'

function PostForm() {
  const [isLoading, setIsLoading] =
    useState(false)
  const [post, setPost] = useState('')
  const { posts, setPosts } =
    useContext(PostsContext)
  const { user, setUser } =
    useContext(AuthContext)

  return (
    <Container className="mb-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form
            onSubmit={async (e) => {
              e.preventDefault()
              setIsLoading(true)
              var authToken =
                'Bearer ' + user.data.token
              const response = await axios.post(
                'http://localhost:5000/api/posts',
                { detail: post },
                {
                  headers: {
                    Authorization: authToken,
                  },
                }
              )
              setIsLoading(false)
              setPosts([response.data, ...posts])
              setPost('')
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>
                {user.data.email}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Your new tweet"
                value={post}
                onChange={(e) =>
                  setPost(e.target.value)
                }
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Container>
              <Row>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {'Tweet '}
                  <BsFillCursorFill color="white" />
                </Button>
              </Row>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default PostForm
