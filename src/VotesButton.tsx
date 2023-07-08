import { useState, useEffect } from 'react'
import './VotesButton.css'

export default function VotesButton() {
  const [count, setCount] = useState(0)
  const fetchVotesUrl = import.meta.env.VITE_VOTES_API_URL

  const fetchVotes = () => {
    fetch(fetchVotesUrl)
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
    button?.classList.add('pulse')
    setTimeout(() => {
      button?.classList.remove('pulse')
    }, 500)
  }

  return (
    <button onClick={handleClick} title='Click to refresh'>
      Vote count is {count}
    </button>
  )
}