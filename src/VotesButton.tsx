import { useState, useEffect } from 'react'
import './VotesButton.css'

export default function VotesButton() {
  const [count, setCount] = useState(0)

  const fetchVotes = () => {
    fetch('http://localhost:3333/votes')
      .then(response => response.json())
      .then(data => setCount(data.votes))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchVotes()
  }, [])

  const handleClick = () => {
    fetchVotes()
    const button = document.querySelector('button')
    button.classList.add('pulse')
    setTimeout(() => {
      button.classList.remove('pulse')
    }, 500)
  }

  return (
    <button onClick={handleClick} title='Click to refresh'>
      Vote count is {count}
    </button>
  )
}