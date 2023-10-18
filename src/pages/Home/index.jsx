import Header from "../../components/PageBuilder/Header"
import Footer from"../../components/PageBuilder/Footer"
import FoodPlan from "../../components/Card/FoodPlan"
import PaymentPlans from "../../components/Card/PaymentPlans"

import './home.css';

function Home() {
  return (
    <div>
      <Header />
      <button className="button1">Experimente Grátis</button>
      <FoodPlan />
      <h1 className="teste">PLANOS E PREÇOS</h1>
      <p className="teste1">Escolha o plano que mais se adequa às suas necessidades e</p>
       <p className="teste2">faça mais com todos os recursos do 4NUTRI para assinantes.</p>
      <PaymentPlans />
      <Footer />
    </div>
  )
}
export default Home
