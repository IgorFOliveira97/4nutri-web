import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Container from '../../components/Container';
import SimpleTitle from '../../components/SimpleTitle';
import Input from '../../components/Input';
import React, { useContext, useState } from 'react';
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
import { Context } from '../../Context/AuthProvider';

export default function FoodsEdit() {
  const navigate = useNavigate();
  const params = useParams();
  const { userData } = useContext(Context);

  const [isEditing, setIsEditing] = useState(false);

  const [food, setFood] = useState({
    nutritionist_id: userData._id,
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
  });

  function validate() {
    if (!food.name) {
      toast.error('Necessario preencher o campo nome!');
      return false;
    }
    if (!food.description) {
      toast.error('Necessario preencher o campo descrição!');
      return false;
    }
    if (!food.calcium) {
      toast.error('Necessario preencher o campo calcio!');
      return false;
    }
    if (!food.magnesium) {
      toast.error('Necessario preencher o campo Magnesio!');
      return false;
    }
    if (!food.vitaminC) {
      toast.error('Necessario preencher o campo Vitamina C!');
      return false;
    }
    if (!food.energy) {
      toast.error('Necessario preencher o campo Energia!');
      return false;
    }
    if (!food.protein) {
      toast.error('Necessario preencher o campo Proteina!');
      return false;
    }
    if (!food.lipids) {
      toast.error('Necessario preencher o campo Lipideos!');
      return false;
    }
    if (!food.cholesterol) {
      toast.error('Necessario preencher o campo Colesterol!');
      return false;
    }
    if (!food.carbohydrate) {
      toast.error('Necessario preencher o campo Carboidrato!');
      return false;
    }
    if (!food.dietary_fiber) {
      toast.error('Necessario preencher o campo Fibra Alimentar!');
      return false;
    }

    return true;
  }

  useEffect(() => {
    axios
      .get(`food/${params.id}`)
      .then((response) =>
        setFood({
          ...food,
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
    <PageBuilder pageName="Cadastre um novo alimento">
      <Container>
        <Form>
          <SimpleTitle>Novo Alimento</SimpleTitle>
          <Label>Nome do alimento</Label>
          <Input
            type="text"
            placeholder="Digite o nome"
            name="name"
            value={food.name}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Descrição</Label>
          <Textarea
            type="text"
            placeholder="Descrição"
            name="description"
            value={food.description}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          ></Textarea>
          <Label>Calcio</Label>
          <Input
            type="number"
            placeholder="mg"
            name="calcium"
            value={food.calcium}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Magnesio</Label>
          <Input
            type="number"
            placeholder="mg"
            name="magnesium"
            value={food.magnesium}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Vitamina C</Label>
          <Input
            type="number"
            placeholder="mg"
            name="vitaminC"
            value={food.vitaminC}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Energia</Label>
          <Input
            type="number"
            placeholder="kcal"
            name="energy"
            value={food.energy}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Proteina</Label>
          <Input
            type="number"
            placeholder="g"
            name="protein"
            value={food.protein}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Lipideos</Label>
          <Input
            type="number"
            placeholder="g"
            name="lipids"
            value={food.lipids}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Colesterol</Label>
          <Input
            type="number"
            placeholder="mg"
            name="cholesterol"
            value={food.cholesterol}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Carboidrato</Label>
          <Input
            type="number"
            placeholder="g"
            name="carbohydrate"
            value={food.carbohydrate}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
          <Label>Fibra Alimentar</Label>
          <Input
            type="number"
            placeholder="g"
            name="dietary_fiber"
            value={food.dietary_fiber}
            onChange={(event) => handleInputChange(event, setFood)}
            disabled={!isEditing}
          />
        </Form>
      </Container>
      <Container>
        <OutlineButton onClick={() => navigate('/foods')}>Voltar</OutlineButton>
        {isEditing ? (
          <Button onClick={saveFood}>Salvar</Button>
        ) : (
          <Button onClick={handleEditClick}>Editar</Button>
        )}
      </Container>
    </PageBuilder>
  );
}
