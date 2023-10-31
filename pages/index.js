import { useEffect, useState } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [data ,setData] = useState(null);
  const [isLoading,setIsLoading] = useState(true)
  const [numberOfDogs,setNumberOfDogs] = useState(1)


  useEffect(()=> {
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(res => res.json())
    .then(data => {
      setData(data)
      setIsLoading(false)
    })
    .catch(err => console.error(err))
  },[numberOfDogs])

  console.log(data)

  if (isLoading) return <h2>Loading...</h2>

  if (data.status === 'error') return <h2>No Data Found</h2>

   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      {/* <Form /> Uncomment <Form /> if you are going after the bonus */}
      {/* This page should receive the images array */}
      <Form setNumberOfDogs={setNumberOfDogs}/>
      <DogList dogsList={data?.message} />
    </div>
  );
}

