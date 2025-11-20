import Navbar from './components/navbar'
import './App.css'
import { useEffect, useState } from 'react'
import Content from './components/content'




function App() {
const [category,setCategory]=useState("general")
 const[input,setInput]=useState()
 const[articles,setArticles]=useState([])
  const handlechange=(e)=>{
      setInput(e.target.value)
      console.log(input)
     }
  const handleClick=()=>{
    const Search=input.trim()
    setCategory(Search || "general")
  }
     useEffect(()=>{
    
          const API_KEY=import.meta.env.VITE_NEWS_API_KEY;

          if(!API_KEY){
            console.error("Missing VITE_NEWS_API_KEY in .env file")
          }
   
            const url= `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`
             fetch(url).then(res=>res.json()).then(data=>{setArticles(data.articles)})
             .catch(err=>console.log("Fetch Error:",err))
    },[category,input])
  
    

  return (

    
   <div className='App'>
    <Navbar setCategory={setCategory} handlechange={handlechange} handleClick={handleClick}   />
     <Content articles={articles} />
  

   </div>
 
  )
}

export default App

