import { Route, Routes} from "react-router"
import { Container } from "./styles"
import { Home } from "./pages/home"
import { Portfolio } from "./pages/portfolio"
import { Footer } from "./components/footer"
import { Insta } from "./components/Insta"


function App() {


  return (
    <Container>
       <Routes>
        <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />}  />
          <Route path={`/portfolio/:areaId`} element={<Portfolio />} />
       </Routes>
       <Footer />
       <Insta />
    </Container>
  )
}

export default App
