import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import Container from '../../components/Container';
import SimpleTitle from '../../components/SimpleTitle';
import Input from '../../components/Input';
import Label from '../../components/Label';
import Textarea from '../../components/TextArea';
import './foods.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useContext, useState } from 'react';
import handleInputChange from '../../handlers/input.handler';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../Context/AuthProvider';

export default function FoodsRegistration() {
  const navigate = useNavigate();
  const { userData } = useContext(Context);

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

  const saveFood = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    axios
      .post('food', food)
      .then((response) => {
        if (response.status == 201) {
          toast.success('Alimento cadastrado com sucesso');
          setFood(food);
        } else {
          toast.error('Houve um erro no cadastro do alimento');
          console.error(response.data);
        }
      })
      .catch((error) => {
        toast.error('Ocorreu um erro no cadastro do alimento!');
        console.error(error);
        console.log(food);
      });
  };

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
          <Button onClick={saveFood}>Cadastrar</Button>
          <Button onClick={() => navigate('/foods')}>Voltar</Button>
        </Form>
      </Container>
    </PageBuilder>
  );
}
