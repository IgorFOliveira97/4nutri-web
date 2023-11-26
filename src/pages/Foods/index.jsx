import './foods.css';
import PageBuilder from '../../components/PageBuilder';
import SearchBar from '../../components/SearchBar';
import SimpleTitle from '../../components/SimpleTitle';
import banana from '../../assets/images/banana.jpg';
import Modal from 'react-modal';
import Button from '../../components/Button';
import OutButton from '../../components/OutlineButton';
import Card from '../../components/CardFood';
import axios from 'axios';
import { toast } from 'react-toastify';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../../components/Container';
import { Context } from '../../Context/AuthProvider';

Modal.setAppElement('#root');

export default function Foods() {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [foods, setFoods] = useState();
  const { userData } = useContext(Context);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios
      //Após o / será inserido o id do usuário logado
      .get(`foods/${userData._id}`)
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        toast.error('Ocorreu um erro ao consultar os alimentos!');
        console.error(error);
      });
  }, []);

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
        <SimpleTitle>Alimentos cadastrados</SimpleTitle>
        <br />
        <div className="food-container">
          {foods &&
            foods.map((food) => {
              return (
                <React.Fragment key={food._id}>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal"
                    overlayClassName="modal-overlay"
                    className="modal-content"
                  >
                    <SimpleTitle>Informação Nutricional</SimpleTitle>
                    <br />
                    <SimpleTitle>{food.name}</SimpleTitle>
                    <br />
                    <table className="info-table">
                      <tbody>
                        <tr>
                          <td>Calcio:</td>
                          <td>{food.calcium}</td>
                        </tr>
                        <tr>
                          <td>Magnesio:</td>
                          <td>{food.magnesium}</td>
                        </tr>
                        <tr>
                          <td>Descrição:</td>
                          <td>{food.description}</td>
                        </tr>
                        <tr>
                          <td>Vitamina C:</td>
                          <td>{food.vitaminC}</td>
                        </tr>
                        <tr>
                          <td>Energia:</td>
                          <td>{food.energy}</td>
                        </tr>
                        <tr>
                          <td>Proteina:</td>
                          <td>{food.protein}</td>
                        </tr>
                        <tr>
                          <td>Lipideos:</td>
                          <td>{food.lipids}</td>
                        </tr>
                        <tr>
                          <td>Colesterol:</td>
                          <td>{food.cholesterol}</td>
                        </tr>
                        <tr>
                          <td>Carboidrato:</td>
                          <td>{food.carbohydrate}</td>
                        </tr>
                        <tr>
                          <td>Fibra Alimentar:</td>
                          <td>{food.dietary_fiber}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Container>
                      <Button
                        onClick={() => navigate(`/foods/edit/${food._id}`)}
                      >
                        Editar
                      </Button>
                      <OutButton onClick={closeModal}>Fechar</OutButton>
                    </Container>
                  </Modal>
                  <Card
                    key={food._id}
                    img={banana}
                    title={food.name}
                    protein={food.protein}
                    carbs={food.carbohydrate}
                    vitaminC={food.vitaminC}
                    onClick={openModal}
                  ></Card>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </PageBuilder>
  );
}
