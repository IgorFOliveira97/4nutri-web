import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Container from '../../components/Container';
import SimpleTitle from '../../components/SimpleTitle';
import Input from '../../components/Input';
import React, { useState } from 'react';
import Label from '../../components/Label';
import banana from '../../assets/images/banana.jpg';
import Textarea from '../../components/TextArea';
import './foods.css';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import OutlineButton from '../../components/OutlineButton';
import handleInputChange from '../../handlers/input.handler';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function FoodsEdit() {
  const navigate = useNavigate();
  const params = useParams();

  const [food, setFood] = useState({
    nutritionist_id: '655a374944bab4bb60e39fbb',
    photo: '',
    name: '',
    description: '',
    energy: '',
    protein: '',
    lipids: '',
    carbohydrate: '',
    dietary_fiber: '',
    calcium: '',
    magnesium: '',
    vitaminC: '',
    cholesterol: '',
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
  });

  function validate() {
    if (!food.photo)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario adicionar uma foto!',
      });
    if (!food.name)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo nome!',
      });
    if (!food.description)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo descrição!',
      });
    if (!food.calcium)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de calcio!',
      });
    if (!food.magnesium)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de magnesio!',
      });
    if (!food.vitaminC)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de vitamina C!',
      });
    if (!food.energy)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de energia!',
      });
    if (!food.protein)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de proteina!',
      });
    if (!food.lipids)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de lipideos!',
      });
    if (!food.cholesterol)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de colesterol!',
      });
    if (!food.carbohydrate)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de carboidrato!',
      });
    if (!food.dietary_fiber)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de Fibra Alimentar!',
      });

    return true;
  }

  useEffect(() => {
    axios
      .get(`food/${params.id}`)
      .then((response) =>
        setFood({
          ...food,
          photo: response.data.photo || banana,
          name: response.data.name,
          description: response.data.description,
          energy: response.data.energy,
          protein: response.data.protein,
          lipids: response.data.lipids,
          carbohydrate: response.data.carbohydrate,
          dietary_fiber: response.data.dietary_fiber,
          calcium: response.data.calcium,
          magnesium: response.data.magnesium,
          vitaminC: response.data.vitaminC,
          cholesterol: response.data.cholesterol,
        })
      )
      .catch((error) => {
        toast.error('Ocorreu um erro ao buscar alimento!');
        console.error(error);
      });
  }, []);

  const saveFood = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    axios
      .put(`food/${params.id}`, food)
      .then((response) => {
        if (response.status == 200) {
          toast.success('Alimento editado com Sucesso');
        } else {
          toast.error('Não foi possível editar os dados do paciente');
          console.error(response.data);
        }
      })
      .catch((error) => {
        toast.error('Houve um erro ao editar os dados do paciente');
        console.error(error);
      });
  };

  return (
    <PageBuilder pageName="Cadastre um novo alimento" userName="João Pablo">
      <Container>
        <Form>
          <SimpleTitle>Novo Alimento</SimpleTitle>
          {status.type === 'success' ? (
            <p style={{ color: 'green', fontSize: '20px', margin: '10px' }}>
              {status.mensagem}
            </p>
          ) : (
            ''
          )}
          {status.type === 'error' ? (
            <p style={{ color: '#ff0000', fontSize: '20px', margin: '10px' }}>
              {status.mensagem}
            </p>
          ) : (
            ''
          )}
          <Label>Foto</Label>
          <Input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(event) => handleInputChange(event, setFood)}
          ></Input>
          <Label>Nome do alimento</Label>
          <Input
            type="text"
            placeholder="Digite o nome"
            name="name"
            value={food.name}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Descrição</Label>
          <Textarea
            type="text"
            placeholder="Descrição"
            name="description"
            value={food.description}
            onChange={(event) => handleInputChange(event, setFood)}
          ></Textarea>
          <Label>Calcio</Label>
          <Input
            type="number"
            placeholder="mg"
            name="calcium"
            value={food.calcium}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Magnesio</Label>
          <Input
            type="number"
            placeholder="mg"
            name="magnesium"
            value={food.magnesium}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Vitamina C</Label>
          <Input
            type="number"
            placeholder="mg"
            name="vitaminC"
            value={food.vitaminC}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Energia</Label>
          <Input
            type="number"
            placeholder="kcal"
            name="energy"
            value={food.energy}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Proteina</Label>
          <Input
            type="number"
            placeholder="g"
            name="protein"
            value={food.protein}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Lipideos</Label>
          <Input
            type="number"
            placeholder="g"
            name="lipids"
            value={food.lipids}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Colesterol</Label>
          <Input
            type="number"
            placeholder="mg"
            name="cholesterol"
            value={food.cholesterol}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Carboidrato</Label>
          <Input
            type="number"
            placeholder="g"
            name="carbohydrate"
            value={food.carbohydrate}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Label>Fibra Alimentar</Label>
          <Input
            type="number"
            placeholder="g"
            name="dietary_fiber"
            value={food.dietary_fiber}
            onChange={(event) => handleInputChange(event, setFood)}
          />
          <Container>
            <OutlineButton onClick={() => navigate('/foods')}>
              Voltar
            </OutlineButton>
            <Button onClick={saveFood}>Salvar</Button>
          </Container>
        </Form>
      </Container>
    </PageBuilder>
  );
}
