import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default function HomePage() {
  const [news, setNews] = useState({})
  const [loading, setloading] = useState(true)
  const [maindata, setMaindata] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    const FetchData = async () => {
      // async await 
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/')
        const result = await response.json()
        setNews(result)
        setMaindata(result.results)
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

  const handleSearch = event => {
    const value = event.target.value
    if(value.length > 0) {
      const filterData = news.results.filter(element => element.title.toLowerCase().includes(value.toLowerCase()))
      if(filterData.length > 0) {
        setNews({
          ...news,
          results: filterData
        })
      }else {
        setNews({
          ...news,
          results: []
        })
      }
    }else {
      setNews({
        ...news,
        results: maindata
      })
    }
  }
  // optional chain operator ?
  return (
    <div>
      <div className="formcontainer">
      <h1>React Basic API Project</h1>
      <input 
      value={search}
      onChange={event => setSearch(event.target.value)}
      onKeyUp={handleSearch}
      placeholder="Search Blog title...."
      />
      </div>
      <div className="news">
      {news.results.length > 0 ? news.results.map((item, index) => (
        <div className="newscontainer" key={index}>
          <div className="newsimage">
            <img src={item.image_url} alt="" />
          </div>
          <div className="">{item.featured  === true ? 'Featured' : 'Not featured'}</div>
          <Link to={`/blog/${item.id}`} className="newstitle">{item.title.slice(0, 30)}...</Link>
          <div className="">{item.summary.slice(0, 70)}...</div>
        </div>
      ))
    :
    <div className="">There is no record found</div>
    }
    </div>
    </div>
  )
}

// Api call 
// create different pages in our website 
// git github
// netlify