import SimpleText from "../../SimpleText";
import Plano from "../../../assets/images/Imagem1.png"
import Item from "../../Item"
import './foodPlan.css';

function FoodPlan() {
    return (
        <> 
            <div className="dash">
                <img src={Plano} alt="Ícone do Facebook" width={600} height={500} />
            </div>
            <div className="atendimento">
                <h1>Ofereça o melhor atendimento nutricional para seus pacientes</h1>
                <div className="lista">
                    <SimpleText>
                        <ol>
                            <ul>
                                <Item item="Planos alimentares calculados ou livres"/>
                                <Item item="Protocolos de Antropometria e Gastos Energéticos"/>
                                <Item item ="Gráficos de evolução"/>
                                <Item item ="Solicitação de exames laboratoriais e análise dos resultados"/>
                                <Item item ="Questionários pré consulta, recordatório 24h e anamnese interativa"/>
                                <Item item ="Prescrições de Suplementos e fitoterápicos"/>

                            </ul>
                        </ol>
                    </SimpleText>
                </div>
          </div> 
          
        </>
        
    )
    }
export default FoodPlan