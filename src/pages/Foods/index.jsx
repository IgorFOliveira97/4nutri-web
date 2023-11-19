import PageBuilder from '../../components/PageBuilder';
import SearchBar from '../../components/SearchBar';
import SimpleTitle from '../../components/SimpleTitle';
import banana from '../../assets/images/banana.jpg';
import hamburguer from '../../assets/images/hamburguer.jpg';
import './foods.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Button from '../../components/Button';
import OutButton from '../../components/OutlineButton';
import Card from '../../components/CardFood';

Modal.setAppElement('#root');

export default function Foods() {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <PageBuilder pageName="Tabela de Alimentos" userName="João Pablo">
      <SearchBar
        button="Novo Alimento"
        navigate="/foods/registration"
        color="#3CB371"
      >
        {' '}
      </SearchBar>
      <div className="divFoods">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <SimpleTitle>Informação Nutricional</SimpleTitle>
          <br />
          <SimpleTitle>Banana</SimpleTitle>
          <br />
          <table className="info-table">
            <tbody>
              <tr>
                <td>Calcio:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Magnesio:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Descrição:</td>
                <td>Fruta</td>
              </tr>
              <tr>
                <td>Vitamina C:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Energia:</td>
                <td>50 kcal</td>
              </tr>
              <tr>
                <td>Proteina:</td>
                <td>20 g</td>
              </tr>
              <tr>
                <td>Lipideos:</td>
                <td>20 g</td>
              </tr>
              <tr>
                <td>Colesterol:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Carboidrato:</td>
                <td>20 g</td>
              </tr>
              <tr>
                <td>Fibra Alimentar:</td>
                <td>20 g</td>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => navigate('/foods/edit')}>Editar</Button>
          <div className="button-div">
            <OutButton onClick={closeModal}>Fechar</OutButton>
          </div>
        </Modal>
        <SimpleTitle>Alimentos cadastrados</SimpleTitle>
        <br />
        <div className="food-container">
          <Card
            img={banana}
            title="Banana"
            protein="20g"
            carbs="20g"
            fat="20g"
            onClick={openModal}
          ></Card>
          <Card
            img={hamburguer}
            title="Hamburguer"
            protein="20g"
            carbs="20g"
            fat="20g"
            onClick={openModal}
          ></Card>
          <Card
            img={hamburguer}
            title="Hamburguer"
            protein="20g"
            carbs="20g"
            fat="20g"
            onClick={openModal}
          ></Card>
        </div>
      </div>
    </PageBuilder>
  );
}
