import './foods.css';
import PageBuilder from '../../components/PageBuilder';
import SearchBar from '../../components/SearchBar';
import SimpleTitle from '../../components/SimpleTitle';
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
  const [foods, setFoods] = useState();
  const { userData } = useContext(Context);

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
    <PageBuilder pageName="Tabela de Alimentos">
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
                  <Card
                    key={food._id}
                    title={food.name}
                    protein={food.protein}
                    carbs={food.carbohydrate}
                    vitaminC={food.vitaminC}
                    onClick={() => navigate(`/foods/edit/${food._id}`)}
                  ></Card>
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </PageBuilder>
  );
}
