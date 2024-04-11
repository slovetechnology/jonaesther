import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


export default function SingleBlogPage() {
    const {id} = useParams()
    const [loading, setloading] = useState(true)
    const [blog, setBlog] = useState({})
    const [date, setDate] = useState('')
    // useParams = use parameters hook
    // destructuring = converting the key of an object to a variable , converting an array element into a variable
    // object , array 
    // const user = {
    //     name: "John",
    //     age: 30,
    //     city: "New York"
    // }
// git
    // const users = ['emeka', 'keneth', 'james']

    // const {name, age, city} = user //object destructuring
    // const [emeka, keneth, james] = users // array destructuring

    // console.log(emeka)
    // // console.log(name, age, city)

    useEffect(() => {
        const FetchSingleBlog = async () => {
            try {
                const response = await fetch(`https://api.spaceflightnewsapi.net/v4/blogs/${id}`)
                const result = await response.json()
                setBlog(result)
                const jsDate = new Date(result.published_at)
                setDate(jsDate.toLocaleString())
            } catch (error) {
                console.log(error)
            }finally {
                setloading(false)
            }
        }
        FetchSingleBlog()
    }, [])
    if(loading === true) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h1>
                <Link to="/">Back</Link>
            </h1>
        <div className="newstitle">{blog.title}</div>
            <div className="banner">
                <img src={blog.image_url} alt="" />
            </div>
                <div className="newstitle">Site: {blog.news_site}</div>
                <div className="newstitle">Published: {date}</div>
                <div className="">{blog.summary}</div>
        </div>
    )
}