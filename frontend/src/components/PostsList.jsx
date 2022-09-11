import { useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from '../contexts/AuthContextProvider'
import { PostsContext } from '../contexts/PostsContextProvider'
import Post from './Post'

function PostsList() {
  const { posts, setPosts } =
    useContext(PostsContext)
  const { user, setUser } =
    useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        var authToken =
          'Bearer ' + user.data.token
        //const config = { headers: { "Authorization": `Bearer ${user.data.token}` } }

        const response = await axios.get(
          'http://localhost:5000/api/posts',
          {
            headers: { Authorization: authToken },
          }
        )

        setPosts(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [user, setUser])

  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}

export default PostsList
