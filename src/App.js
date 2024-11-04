import './App.css'
import EnterPasswords from './components/EnterPasswords'

const App = () => (
  <div className="app-container">
    <div className="app-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app log"
        className="app-logo"
      />
    </div>
    <EnterPasswords />
  </div>
)

export default App
