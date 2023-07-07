import logo from '/logo.svg'
import './App.css'
import VotesButton from './VotesButton'

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo react" alt="Logo" />
      </div>
      <div className="card">
        <VotesButton />
      </div>
    </>
  )
}

export default App