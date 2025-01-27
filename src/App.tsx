import { Route, Routes } from "react-router"
import { Container } from "./styles"
import { Home } from "./pages/home"
import { Portfolio } from "./pages/portfolio"


function App() {


  return (
    <Container>
       <Routes>
          <Route path="/" element={<Home />}  />
          <Route path={`/portfolio`} element={<Portfolio />} />
       </Routes>
    </Container>
  )
}

export default App
