import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './components/Card.css'
import './components/Navbar.css';
import "./components/Footer.css"
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
function App() {
  const [data,setData] = useState([])
  const [state,setState]= useState("india")
  useEffect( () => {
    async function fetchData(){
      try {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${state}&from=2023-06-11&sortBy=publishedAt&apiKey=0942056c4aff4e5f91c0ea64ad60fab3`);
        const actualData =await res.json();
        setData([]);
        setData(await actualData.articles);
        console.log(data)
      } catch (error) {
        console.log("error in app at useeffect "+error)
      }
    }
    fetchData();
  },[state])

  return (
    <>
      <Navbar setState={setState} />
      <div className='news_area'>
      {data.map((ele,ind) => {
        return (
          <Card key={ind} {...ele}/>
        )
      })
      
}
      </div>
      <Footer/>
    </>
  );
}

export default App;
