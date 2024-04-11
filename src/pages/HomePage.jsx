import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function HomePage() {
  const [news, setNews] = useState({})
  const [loading, setloading] = useState(true)
  useEffect(() => {
    const FetchData = async () => {
      // async await 
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/')
        const result = await response.json()
        setNews(result)
      } catch (error) {
        console.log(error)
      }finally {
        setloading(false)
      }
    }
    FetchData()
  }, [])

  if(loading === true) {
    return (
      <div>Loading...</div>
    )
  }
  // optional chain operator ?
  return (
    <div className="news">
      {news.results.map((item, index) => (
        <div className="newscontainer" key={index}>
          <div className="newsimage">
            <img src={item.image_url} alt="" />
          </div>
          <div className="">{item.featured  === true ? 'Featured' : 'Not featured'}</div>
          <Link to={`/blog/${item.id}`} className="newstitle">{item.title.slice(0, 30)}...</Link>
          <div className="">{item.summary.slice(0, 70)}...</div>
        </div>
      ))}
    </div>
  )
}

// Api call 
// create different pages in our website 
// git github
// netlify