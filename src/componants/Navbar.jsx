import {Link} from 'react-router-dom'
import india from "../assets/indiaa.png";
import { useContext, useState } from 'react';
import NewsContext from '../context/NewsContext';
import { fetchNews } from '../context/NewsAction';
const Navbar = () => {
  const [search, setSearch]=useState("")
  const{newsDispatch} = useContext(NewsContext)
  const handleSearch= async(e)=>{
    e.preventDefault()
const data= await fetchNews(search)
newsDispatch({
  type: "GET_NEWS",
payload : {news:data, topic:search}

})
setSearch("")
  }
  const handleTopics= async(topic)=>{
    const data = await fetchNews(search);
    newsDispatch({
      type:"GET_NEWS",
      payload:{news:data, topic:topic},
    })
  }
  return (
    <nav className="navbar bg-dark">
  <div className="container-fluid text-light">
  <a className="navbar-brand" href="#">
      <img src={india} alt="Logo" width="70" height="50" className="d-inline-block align-text-top"/> 
    </a>
    <Link to='/' className="navbar-brand text-light"onClick={()=>handleTopics("Indore")}>Home</Link>
    <Link to='/about' className="navbar-brand text-light">About us</Link>
    <Link to='/contact' className="navbar-brand text-light">Contact</Link>
    
          
    <form className="d-flex" role="search" onSubmit={handleSearch} >
      <input value={search} required className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default Navbar
