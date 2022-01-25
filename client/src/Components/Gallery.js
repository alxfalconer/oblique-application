import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ProductBasic from './ProductBasic'
const api = "http://localhost:3001/"


export function Gallery({user, userId, setLoggedIn}) {

  useEffect(() => {
    fetchArtwork();
  },[]);

  const [artworks, setData] = useState([]);
//   const [collection, setCollection] = useState({})

  const fetchArtwork = async () => {
    const data = await fetch(api + '/products')

    const artworks = await data.json()
    setData(artworks);
    console.log(artworks)
  }
  
//   const createCollection = (e) => {
//     e.preventDefault()
//     fetch(api + "collections",
//    {
//         method: 'POST',
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify( {
//             user_id: userId
//         })
//     }).then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       setLoggedIn(true)
//       setCollection(collection)
//       window.alert("Collection created!")
//     })
//   }

return(
    <div className='page-container'>
          <h1>Welcome, {user.name}!</h1>
      <h3>Peruse the gallery and click the artworks that pique your interest.</h3>
      {artworks.map(product =>
        <ProductBasic
          key={product.id}
          id={product.id}
          name={product.name}
          thumbnail={product.img_thumbnail}
          price={product.price}
        />
        
      )}
      
    </div>
  )
}