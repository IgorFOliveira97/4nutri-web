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
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import OutlineButton from '../../components/OutlineButton';

export default function FoodsEdit() {
  const navigate = useNavigate();
  const [editedValues] = useState({
    nome: 'Banana',
    descrição: 'Fruta',
    calcio: '20',
    magnesio: '20',
    vitaminaC: '20',
    energia: '50',
    proteina: '20',
    lipideos: '20',
    colesterol: '20',
    carboidrato: '20',
    fibraAlimentar: '20',
  });

  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
  });

  const saveFood = async (event) => {
    event.preventDefault();
    if (!validate()) return;
  };

  function validate() {
    if (!editedValues.photo)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario adicionar uma foto!',
      });
    if (!editedValues.name)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo nome!',
      });
    if (!editedValues.description)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo descrição!',
      });
    if (!editedValues.calcium)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de calcio!',
      });
    if (!editedValues.magnesium)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de magnesio!',
      });
    if (!editedValues.vitaminC)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de vitamina C!',
      });
    if (!editedValues.energy)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de energia!',
      });
    if (!editedValues.protein)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de proteina!',
      });
    if (!editedValues.lipids)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de lipideos!',
      });
    if (!editedValues.cholesterol)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de colesterol!',
      });
    if (!editedValues.carbohydrate)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de carboidrato!',
      });
    if (!editedValues.dietary_fiber)
      return setStatus({
        type: 'error',
        mensagem: 'Necessario preencher o campo de Fibra Alimentar!',
      });

    return true;
  }

  return (
    <PageBuilder pageName="Edite o alimento" userName="João Pablo">
      <Container>
        <Form>
          <SimpleTitle>Editar Alimento</SimpleTitle>
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
          <img src={banana} alt=""></img>
          <br />
          <p></p>
          <Label>Nome do alimento</Label>
          <Input
            type="text"
            placeholder="Digite o nome"
            value={editedValues.nome}
          ></Input>
          <Label>Descrição</Label>
          <Textarea
            type="text"
            placeholder="Descrição"
            value={editedValues.descrição}
          ></Textarea>
          <Label>Calcio</Label>
          <Input
            type="number"
            placeholder="mg"
            value={editedValues.calcio}
          ></Input>
          <Label>Magnesio</Label>
          <Input
            type="number"
            placeholder="mg"
            value={editedValues.magnesio}
          ></Input>
          <Label>Vitamina C</Label>
          <Input
            type="number"
            placeholder="mg"
            value={editedValues.vitaminaC}
          ></Input>
          <Label>Energia</Label>
          <Input
            type="number"
            placeholder="kcal"
            value={editedValues.energia}
          ></Input>
          <Label>Proteina</Label>
          <Input
            type="number"
            placeholder="g"
            value={editedValues.proteina}
          ></Input>
          <Label>Lipideos</Label>
          <Input
            type="number"
            placeholder="g"
            value={editedValues.lipideos}
          ></Input>
          <Label>Colesterol</Label>
          <Input
            type="number"
            placeholder="mg"
            value={editedValues.colesterol}
          ></Input>
          <Label>Carboidrato</Label>
          <Input
            type="number"
            placeholder="g"
            value={editedValues.carboidrato}
          ></Input>
          <Label>Fibra Alimentar</Label>
          <Input
            type="number"
            placeholder="g"
            value={editedValues.fibraAlimentar}
          ></Input>
          <Button onClick={saveFood}>Concluir</Button>
          <OutlineButton onClick={() => navigate('/foods')}>
            Cancelar
          </OutlineButton>
        </Form>
      </Container>
    </PageBuilder>
  );
}
