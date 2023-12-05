import './appoiment.css';
import Input from '../../components/Input';
import Label from '../../components/Label';
import PageBuilder from '../../components/PageBuilder';
import handleInputChange from '../../handlers/input.handler';
import TextArea from '../../components/TextArea';
import InputRadio from '../../components/InputRadio';
import Select from '../../components/Select';
import Options from '../../components/Options';
import axios from 'axios';
import Button from '../../components/Button';
import Container from '../../components/Container';
import OutlineButton from '../../components/OutlineButton';
import SimpleTitle from '../../components/SimpleTitle';
import DashedButton from '../../components/DottedButton';

import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TextAreaWithLabel from '../../components/TextAreaWithLabel';

export default function Appoiment() {
  const navigate = useNavigate();
  const params = useParams();
  const [foods, setFoods] = useState();
  const [selectedItem, setSelectedItem] = useState({
    breakfast: [{ name: '' }],
    lunch: [{ name: '' }],
    afternoon_snack: [{ name: '' }],
    dinner: [{ name: '' }],
    supper: [{ name: '' }],
  });
  const [meal, setMeal] = useState({
    breakfast: [],
    lunch: [],
    afternoon_snack: [],
    dinner: [],
    supper: [],
  });
  const [appoiment, setAppoiment] = useState({
    patient_id: params.patient_id,
    weight: '',
    height: '',
    bmi: '',
    skinfold_thickness: '',
    growth_curve: '',
    gestational_curve: '',
    diet: {
      breakfast: [],
      lunch: [],
      afternoon_snack: [],
      dinner: [],
      supper: [],
    },
  });
  const [patient, setPatient] = useState({
    name: '',
    birth_date: '',
    gender: '',
  });

  const { userData } = useContext(Context);

  useEffect(() => {
    axios
      .get(`foods/${userData._id}`)
      .then((response) => setFoods(response.data))
      .catch((error) => {
        toast.error('Ocorreu um erro ao listar alimentos');
        console.error(error);
      });
    axios
      .get(`patient/${params.patient_id}`)
      .then((response) =>
        setPatient({
          name: response.data.name,
          birth_date: response.data.birth_date,
          gender: response.data.gender,
        })
      )
      .catch((error) => {
        toast.error('Ocorreu um erro ao consultar paciente');
        console.error(error);
      });
  }, []);

  const saveAppoiment = async () => {
    console.log('Consulta: ', appoiment);
    console.log('Refeições: ', meal);
    await axios
      .post('appoiment', appoiment)
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          toast.success('Consulta salva!');
          navigate(`/patient/details/${params.patient_id}`);
        } else {
          console.log(response.data);
          toast.error('Houve um erro no salvamento');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error('Algo inesperado ocorreu!');
      });
  };

  const addItem = (item, meal, foods) => {
    const selectedItem = foods.find((food) => food.name === item.name);

    if (selectedItem) {
      setMeal((prevState) => ({
        ...prevState,
        [meal]: [...prevState[meal], selectedItem],
      }));

      setAppoiment((prevAppoiment) => ({
        ...prevAppoiment,
        diet: {
          ...prevAppoiment.diet,
          [meal]: [...prevAppoiment.diet[meal], selectedItem],
        },
      }));
    }
  };
  return (
    <PageBuilder pageName="Consulta">
      <Tabs className="tab-appoiment">
        <TabList>
          <Tab>Dados paciente</Tab>
          <Tab>Medidas Antropométricas</Tab>
          <Tab>Recordatório</Tab>
          <Tab>Dieta</Tab>
        </TabList>
        <TabPanel className="tab-panel-appoiment">
          <TextAreaWithLabel width="400px" label="Nome do paciente">
            {patient.name}
          </TextAreaWithLabel>
          <TextAreaWithLabel width="400px" label="Data de Nascimento">
            {patient.birth_date}
          </TextAreaWithLabel>
          <Label>Gênero</Label>
          <fieldset className="fildset">
            <InputRadio
              name="gender"
              id="masculino"
              value="Masculino"
              checked={patient.gender === 'Masculino'}
              onChange={(event) => handleInputChange(event, setPatient)}
              disabled
            />
            <InputRadio
              name="gender"
              id="feminino"
              value="Feminino"
              checked={patient.gender === 'Feminino'}
              onChange={(event) => handleInputChange(event, setPatient)}
              disabled
            />
            <InputRadio
              name="gender"
              id="outro"
              value="Outro"
              checked={patient.gender === 'Outro'}
              onChange={(event) => handleInputChange(event, setPatient)}
              disabled
            />
          </fieldset>
        </TabPanel>
        <TabPanel className="tab-panel-appoiment">
          <Label>Peso(kg)</Label>
          <Input
            type="text"
            name="weight"
            value={appoiment.weight}
            onChange={(event) => handleInputChange(event, setAppoiment)}
          />
          <Label>Altura(cm)</Label>
          <Input
            type="number"
            name="height"
            value={appoiment.height}
            onChange={(event) => handleInputChange(event, setAppoiment)}
          ></Input>
          <Label>IMC</Label>
          <Input
            type="number"
            name="bmi"
            value={appoiment.bmi}
            onChange={(event) => handleInputChange(event, setAppoiment)}
          ></Input>
          <Label>Dobras cutâneas</Label>
          <Input
            type="number"
            name="skinfold_thickness"
            value={appoiment.skinfold_thickness}
            onChange={(event) => handleInputChange(event, setAppoiment)}
          ></Input>
          <Label>Curva de crescimento</Label>
          <Input
            type="number"
            name="growth_curve"
            value={appoiment.growth_curve}
            onChange={(event) => handleInputChange(event, setAppoiment)}
          ></Input>
          <Label>Curva Gestacional</Label>
          <Input
            type="number"
            name="gestational_curve"
            value={appoiment.gestational_curve}
            onChange={(event) => handleInputChange(event, setAppoiment)}
          ></Input>
        </TabPanel>
        <TabPanel className="tab-panel-appoiment">
          <Label>Café da Manhã</Label>
          <TextArea></TextArea>
          <Label> Almoço</Label>
          <TextArea rows="5" cols="33"></TextArea>
          <Label>Lanche da Tarde</Label>
          <TextArea rows="5" cols="33"></TextArea>
          <Label>Jantar</Label>
          <TextArea rows="5" cols="33"></TextArea>
          <Label>Ceia</Label>
          <TextArea rows="5" cols="33"></TextArea>
        </TabPanel>
        <TabPanel className="tab-panel-appoiment">
          <SimpleTitle>Café da manhã</SimpleTitle>
          <Container width="100%">
            <Select
              width="50%"
              name="name"
              value={selectedItem.breakfast.name}
              onChange={(event) =>
                handleInputChange(event, () =>
                  setSelectedItem({
                    ...selectedItem,
                    breakfast: { name: event.target.value },
                  })
                )
              }
            >
              {foods &&
                foods.map((food) => (
                  <Options key={food._id}>{food.name}</Options>
                ))}
            </Select>
            <DashedButton
              width="20%"
              onClick={() =>
                addItem(selectedItem.breakfast, 'breakfast', foods)
              }
            >
              Adicionar alimento
            </DashedButton>
          </Container>
          <table className="table-meal">
            <thead>
              <tr>
                <td>Alimento</td>
                <td>Quantidade</td>
                <td>Energia (kcal)</td>
                <td>Proteínas</td>
                <td>Lipideos</td>
                <td>Colesterol</td>
                <td>Carboidratos</td>
                <td>Fibras</td>
                <td>Cálcio</td>
                <td>Magnésio</td>
                <td>Vitamina</td>
              </tr>
            </thead>
            <tbody>
              {meal.breakfast.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>{item.energy || '0'}</td>
                    <td>{item.protein || '0'}</td>
                    <td>{item.lipids || '0'}</td>
                    <td>{item.cholesterol || '0'}</td>
                    <td>{item.carbohydrate || '0'}</td>
                    <td>{item.dietary_fiber || '0'}</td>
                    <td>{item.calcium || '0'}</td>
                    <td>{item.magnesium || '0'}</td>
                    <td>{item.vitaminC || '0'}</td>
                    {/* <td>
                      <OutlineButton>
                        <Icon icon={MdDelete} size="25px" />
                      </OutlineButton>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <SimpleTitle>Almoço</SimpleTitle>
          <Container width="100%">
            <Select
              width="50%"
              name="name"
              value={selectedItem.lunch.name}
              onChange={(event) =>
                handleInputChange(event, () =>
                  setSelectedItem({
                    ...selectedItem,
                    lunch: { name: event.target.value },
                  })
                )
              }
            >
              {foods &&
                foods.map((food) => (
                  <Options key={food._id}>{food.name}</Options>
                ))}
            </Select>
            <DashedButton
              width="20%"
              onClick={() => addItem(selectedItem.lunch, 'lunch', foods)}
            >
              Adicionar alimento
            </DashedButton>
          </Container>
          <table className="table-meal">
            <thead>
              <tr>
                <td>Alimento</td>
                <td>Quantidade</td>
                <td>Energia (kcal)</td>
                <td>Proteínas</td>
                <td>Lipideos</td>
                <td>Colesterol</td>
                <td>Carboidratos</td>
                <td>Fibras</td>
                <td>Cálcio</td>
                <td>Magnésio</td>
                <td>Vitamina</td>
              </tr>
            </thead>
            <tbody>
              {meal.lunch.map((item) => {
                // console.log(item);
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>{item.energy || '0'}</td>
                    <td>{item.protein || '0'}</td>
                    <td>{item.lipids || '0'}</td>
                    <td>{item.cholesterol || '0'}</td>
                    <td>{item.carbohydrate || '0'}</td>
                    <td>{item.dietary_fiber || '0'}</td>
                    <td>{item.calcium || '0'}</td>
                    <td>{item.magnesium || '0'}</td>
                    <td>{item.vitaminC || '0'}</td>
                    {/* <td>
                      <OutlineButton>
                        <Icon icon={MdDelete} size="25px" />
                      </OutlineButton>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <SimpleTitle>Lanche da tarde</SimpleTitle>
          <Container width="100%">
            <Select
              width="50%"
              name="name"
              value={selectedItem.afternoon_snack.name}
              onChange={(event) =>
                handleInputChange(event, () =>
                  setSelectedItem({
                    ...selectedItem,
                    afternoon_snack: { name: event.target.value },
                  })
                )
              }
            >
              {foods &&
                foods.map((food) => (
                  <Options key={food._id}>{food.name}</Options>
                ))}
            </Select>
            <DashedButton
              width="20%"
              onClick={() =>
                addItem(selectedItem.afternoon_snack, 'afternoon_snack', foods)
              }
            >
              Adicionar alimento
            </DashedButton>
          </Container>
          <table className="table-meal">
            <thead>
              <tr>
                <td>Alimento</td>
                <td>Quantidade</td>
                <td>Energia (kcal)</td>
                <td>Proteínas</td>
                <td>Lipideos</td>
                <td>Colesterol</td>
                <td>Carboidratos</td>
                <td>Fibras</td>
                <td>Cálcio</td>
                <td>Magnésio</td>
                <td>Vitamina</td>
              </tr>
            </thead>
            <tbody>
              {meal.afternoon_snack.map((item) => {
                // console.log(item);
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>{item.energy || '0'}</td>
                    <td>{item.protein || '0'}</td>
                    <td>{item.lipids || '0'}</td>
                    <td>{item.cholesterol || '0'}</td>
                    <td>{item.carbohydrate || '0'}</td>
                    <td>{item.dietary_fiber || '0'}</td>
                    <td>{item.calcium || '0'}</td>
                    <td>{item.magnesium || '0'}</td>
                    <td>{item.vitaminC || '0'}</td>
                    {/* <td>
                      <OutlineButton>
                        <Icon icon={MdDelete} size="25px" />
                      </OutlineButton>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <SimpleTitle>Janta</SimpleTitle>
          <Container width="100%">
            <Select
              width="50%"
              name="name"
              value={selectedItem.dinner.name}
              onChange={(event) =>
                handleInputChange(event, () =>
                  setSelectedItem({
                    ...selectedItem,
                    dinner: { name: event.target.value },
                  })
                )
              }
            >
              {foods &&
                foods.map((food) => (
                  <Options key={food._id}>{food.name}</Options>
                ))}
            </Select>
            <DashedButton
              width="20%"
              onClick={() => addItem(selectedItem.dinner, 'dinner', foods)}
            >
              Adicionar alimento
            </DashedButton>
          </Container>
          <table className="table-meal">
            <thead>
              <tr>
                <td>Alimento</td>
                <td>Quantidade</td>
                <td>Energia (kcal)</td>
                <td>Proteínas</td>
                <td>Lipideos</td>
                <td>Colesterol</td>
                <td>Carboidratos</td>
                <td>Fibras</td>
                <td>Cálcio</td>
                <td>Magnésio</td>
                <td>Vitamina</td>
              </tr>
            </thead>
            <tbody>
              {meal.dinner.map((item) => {
                // console.log(item);
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>{item.energy || '0'}</td>
                    <td>{item.protein || '0'}</td>
                    <td>{item.lipids || '0'}</td>
                    <td>{item.cholesterol || '0'}</td>
                    <td>{item.carbohydrate || '0'}</td>
                    <td>{item.dietary_fiber || '0'}</td>
                    <td>{item.calcium || '0'}</td>
                    <td>{item.magnesium || '0'}</td>
                    <td>{item.vitaminC || '0'}</td>
                    {/* <td>
                      <OutlineButton>
                        <Icon icon={MdDelete} size="25px" />
                      </OutlineButton>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <SimpleTitle>Ceia</SimpleTitle>
          <Container width="100%">
            <Select
              width="50%"
              name="name"
              value={selectedItem.supper.name}
              onChange={(event) =>
                handleInputChange(event, () =>
                  setSelectedItem({
                    ...selectedItem,
                    supper: { name: event.target.value },
                  })
                )
              }
            >
              {foods &&
                foods.map((food) => (
                  <Options key={food._id}>{food.name}</Options>
                ))}
            </Select>
            <DashedButton
              width="20%"
              onClick={() => addItem(selectedItem.supper, 'supper', foods)}
            >
              Adicionar alimento
            </DashedButton>
          </Container>
          <table className="table-meal">
            <thead>
              <tr>
                <td>Alimento</td>
                <td>Quantidade</td>
                <td>Energia (kcal)</td>
                <td>Proteínas</td>
                <td>Lipideos</td>
                <td>Colesterol</td>
                <td>Carboidratos</td>
                <td>Fibras</td>
                <td>Cálcio</td>
                <td>Magnésio</td>
                <td>Vitamina</td>
              </tr>
            </thead>
            <tbody>
              {meal.supper.map((item) => {
                // console.log(item);
                return (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>{item.energy || '0'}</td>
                    <td>{item.protein || '0'}</td>
                    <td>{item.lipids || '0'}</td>
                    <td>{item.cholesterol || '0'}</td>
                    <td>{item.carbohydrate || '0'}</td>
                    <td>{item.dietary_fiber || '0'}</td>
                    <td>{item.calcium || '0'}</td>
                    <td>{item.magnesium || '0'}</td>
                    <td>{item.vitaminC || '0'}</td>
                    {/* <td>
                      <OutlineButton>
                        <Icon icon={MdDelete} size="25px" />
                      </OutlineButton>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabPanel>
      </Tabs>
      <Container>
        <OutlineButton onClick={() => navigate('/patients')}>
          Voltar
        </OutlineButton>
        <Button onClick={saveAppoiment}>Finalizar Consulta</Button>
      </Container>
    </PageBuilder>
  );
}
