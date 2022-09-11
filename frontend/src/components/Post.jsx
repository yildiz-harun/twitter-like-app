import axios from 'axios'
import {
  useContext,
  useFetch,
  useState,
} from 'react'
import { PostsContext } from '../contexts/PostsContextProvider'
import { AuthContext } from '../contexts/AuthContextProvider'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {
  BsTrash,
  BsCalendarEvent,
  BsFillCursorFill,
} from 'react-icons/bs'

function Post({ post }) {
  const { posts, setPosts } =
    useContext(PostsContext)
  const { user, setUser } =
    useContext(AuthContext)

  const handleClick = async () => {
    const filtered = posts.filter((obj) => {
      return obj._id !== post._id
    })
    setPosts(filtered)
    var authToken = 'Bearer ' + user.data.token
    const response = await axios.delete(
      `http://localhost:5000/api/posts/${post._id}`,
      {
        headers: { Authorization: authToken },
      }
    )
  }

  return (
    <Container className="mb-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title>
                <BsFillCursorFill color="green" />
                {post.detail}
              </Card.Title>
              {/* <Button variant="danger" size="sm"> */}
              <BsTrash
                cursor={'pointer'}
                color="red"
                onClick={handleClick}
              />
              {/* </Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">
              <BsCalendarEvent color="blue" />
              {' ' + post.createdAt}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Post
