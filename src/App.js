import React from 'react'
import { useState, useEffect } from 'react'
import Invoice from './invoice'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setuser] = useState({})
  const [item, setitem] = useState('')
  const [qty, setqty] = useState(0)
  const [price, setprice] = useState(0)
  const [list, setlist] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getData = async () => {
    fetch('https://api.randomuser.me')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results[0])
        setuser(data.results[0])
        setIsLoading(false)
      })
  }
  useEffect(() => {
    setTimeout(getData(), 1000)
  }, [])

  return isLoading ? (
    'Loading...'
  ) : (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/invoice'>
            <Invoice user={user} list={list} setlist={setlist} />
          </Route>
          <Route path='/'>
            <Home
              item={item}
              setitem={setitem}
              price={price}
              setprice={setprice}
              qty={qty}
              setqty={setqty}
              list={list}
              setlist={setlist}
              getData={getData}
              user={user}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
