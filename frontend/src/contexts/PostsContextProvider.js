import { createContext, useState } from "react"

export const PostsContext = createContext()

function PostsContextProvider({ children }) {
    const [posts, setPosts] = useState([{ detail: "postDetai1", id: "55" }, { detail: "postDetai1", id: "55" }])
    return (
        < PostsContext.Provider value={{ posts, setPosts }} >{children}</PostsContext.Provider >
    )
}
export default PostsContextProvider
