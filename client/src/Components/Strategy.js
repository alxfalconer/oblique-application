import React, {useState} from 'react';
const api = "http://localhost:3001/"
const axios = require('axios').default;

export const Strategy = () => {
    const [strategy, setStrategy] = useState("");
    const [stratStore, setStratStore] = useState([])
    const cardText = document.getElementById('card-text')

    const getStrategy = () => {
      const url =
      'http://localhost:5000/home';

      axios.get(url).then(res => {
          const data = res.data.get.cards;
          const cardNum = Math.floor(Math.random() * data.length);
          const randomCard = data[cardNum];
          cardText.textContent = randomCard.strategy

          setStrategy(randomCard.strategy);
          console.log(randomCard.strategy)
       
      });

    const stratData = ({strategy}) => {
    
      stratStore.push({strategy});
      saveStrat();
      setStratStore();
      stratData()
    }
  }
  
  const saveStrat = () => {
    stratStore.add({
      strategy: cardText.innerText,
    })
    displayStrat();
  }
  
  const displayStrat = () => {
    stratStore.map(data => {
      const strat = document.createElement("div");
      strat.classList.add("card-text");
      strat.textContent = data.strategy;
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  
    const createStrategy = {
      method: "POST",
      headers: {
            "Content-type": "application/json",
            Accepts: "application/json",
        },
        body: JSON.stringify({
            strategy_text: cardText.innerText
          
        })
      }
    fetch(api + "strategies", createStrategy
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setStrategy(data)
      })
      .catch((err) => console.log(err))
      window.alert("Saved!")
  }

  return (
      <div>
  <button
    onClick={getStrategy} className="delete-btn"
    >Draw a Card</button>
    <br></br><br></br><br></br>
<blockquote className="card" id="card-text">S T R A T E G Y</blockquote>
<br></br> 

<button onClick={handleSubmit} className='delete-btn'> Add </button>
</div>
  );
}
  

