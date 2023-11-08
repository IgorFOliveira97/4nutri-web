import PageBuilder from '../../components/PageBuilder';
import TextArea from '../../components/TextAreaWithLabel';
import SimpleText from '../../components/SimpleText';
import Container from '../../components/Container';
import SimpleTitle from '../../components/SimpleTitle';
import './foods.css';

export default function Foods() {
  return (
    <PageBuilder pageName="Cadastre um novo alimento" userName="João Pablo">
      <Container>
        <div className="divFoods">
          <SimpleTitle>Alimentos cadastrados</SimpleTitle>
          <br />
          <ol>
            <li className="liFoods">Banana</li>
            <li className="liFoods">Salada</li>
            <li className="liFoods">Hamburguer</li>
            <li className="liFoods">Queijo</li>
            <li className="liFoods">Barra de cereal</li>
          </ol>
        </div>

        <div className="divFoods">
          <SimpleTitle>Alimento selecionado</SimpleTitle>
          <br />
          <SimpleTitle>Banana</SimpleTitle>
          <br />
          <p className="textP">Calcio: 20 mg</p>
          <p className="textP">Magnesio: 20 mg</p>
          <p className="textP">Descrição: Fruta </p>
          <p className="textP">Vitamina C: 20 mg</p>
          <p className="textP">Energia: 50 kcal</p>
          <p className="textP">Proteina: 20 g</p>
          <p className="textP">Lipideos: 20 g</p>
          <p className="textP">Colesterol: 20 mg</p>
          <p className="textP">Carboidrato: 20 g</p>
          <p className="textP">Fibra Alimentar: 20 g</p>
        </div>
      </Container>
    </PageBuilder>
  );
}
