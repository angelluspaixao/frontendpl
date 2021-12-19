import './App.css'
import Card from './components/Card'
import { Header } from './components/Header'
import { Title } from './components/Title'

function App() {
  return (
    <div className="App">
      <Header />
      <Title>Resultado da busca</Title>
      <Card />
    </div>
  )
}

export default App