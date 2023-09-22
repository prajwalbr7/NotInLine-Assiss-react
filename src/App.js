import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ViewAllSpecialists from './components/ViewAllSpecialists'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ViewAllSpecialists" component={ViewAllSpecialists} />
    </Switch>
  </BrowserRouter>
)

export default App
