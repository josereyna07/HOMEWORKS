import { useState } from 'react'
import Graph from './components/Graph'
import CityList from './components/CityList'
import { createNodes, createLinks, graphConfig, cities, people } from './data/sampleData'
import './App.css'

function App() {
  const [selectedCity, setSelectedCity] = useState(null)
  const [nodes] = useState(createNodes())
  const [links] = useState(createLinks())

  const handleCityClick = (cityId) => {
    setSelectedCity(cityId)
  }

  return (
    <div className="app">
      <h1>Friends and Cities Network</h1>
      <div className="app-content">
        <div className="graph-section">
          <Graph 
            nodes={nodes}
            links={links}
            config={graphConfig}
            onNodeClick={handleCityClick}
          />
        </div>
        <div className="city-section">
          <CityList 
            selectedCity={selectedCity}
            people={people}
            cities={cities}
          />
        </div>
      </div>
    </div>
  )
}

export default App
