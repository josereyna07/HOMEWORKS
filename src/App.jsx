import Sidebar from './components/Sidebar/Sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>React N-ary Tree Menu</h1>
        <p>Select a menu item from the sidebar to navigate</p>
      </div>
    </div>
  )
}

export default App
