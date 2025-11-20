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
    
    
   
            const url= `https://newsapi.org/v2/everything?q=${category}&apiKey=Your Api Key`
             fetch(url).then(res=>res.json()).then(data=>setArticles(data.articles))
    },[category,input])
  
    

  return (

    
   <div className='App'>
    <Navbar setCategory={setCategory} handlechange={handlechange} handleClick={handleClick}   />
     <Content articles={articles} />
  


   
   </div>
 
  )
}

export default App
