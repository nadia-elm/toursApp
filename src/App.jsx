const url = 'https://course-api.com/react-tours-project';
import { useEffect, useState } from "react";
import axios from 'axios'
import { Tours } from "./components/Tours";
import { Loading } from "./components/Loading";

const App = () => {
  const [isLoading,setIsLoading] =useState(true)
  const[tours, setTours] = useState([])


  const removeTour = (id) =>{
    let newTours = tours.filter((tour) => tour.id !== id)
     
  
    setTours(newTours)
  }


  const getTours = async() => {
    setIsLoading(true)
    try {
      let res = await axios.get(url)
      const tours = res.data
      console.log(tours)
      setTours(tours)
      setIsLoading(false)
      
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
      getTours()
  },[])
  if(isLoading){
    return (
      <main>
        <Loading />
      </main>
    )
  }else{
    return (
      <main>
        <Tours tours={tours}  removeTour={removeTour} />
      </main>
    )
  }
  
};
export default App;
