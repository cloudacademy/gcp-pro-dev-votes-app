import logo from '/logo.svg'
import './App.css'
import VotesButton from './VotesButton'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="Logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <VotesButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App