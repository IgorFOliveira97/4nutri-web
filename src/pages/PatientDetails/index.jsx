// import React, { useState } from 'react';
// import PageBuilder from '../../components/PageBuilder';
// import Form from '../../components/Form';
// import SimpleTitle from '../../components/SimpleTitle';
// import Input from '../../components/Input';
// import Label from '../../components/Label';
// import InputRadio from '../../components/InputRadio';
// import TextArea from '../../components/TextArea';
// import Button from '../../components/Button';

// export default function PatientDetails() {
//   const [isEditing, setIsEditing] = useState(false);
//   return (
//     <div>
//       <PageBuilder>
//         <Form>
//           <SimpleTitle>Editar informações</SimpleTitle>
//           <Label>Nome</Label>
//           <Input
//             type="text"
//             name="nome"
//             id="nome"
//             value="Igor Oliveira"
//             disabled={!isEditing}
//           ></Input>

//           <Label>Telefone</Label>
//           <Input
//             type="tel"
//             name="Telefone"
//             id="Telefone"
//             value="987870169"
//             disabled={!isEditing}
//           ></Input>

//           <Label>Data de nascimento</Label>
//           <Input
//             type="date"
//             name="nascimento"
//             id="nascimento"
//             value="07/03/1997"
//           ></Input>

//           <Label>Gênero</Label>
//           <fieldset className="fildset">
//             <InputRadio
//               name="genero"
//               id="masculino"
//               value="Masculino"
//             ></InputRadio>
//             <InputRadio
//               name="genero"
//               id="feminino"
//               value="Feminino"
//             ></InputRadio>
//             <InputRadio name="genero" id="outro" value="Outro"></InputRadio>
//           </fieldset>
//           <Label>Email</Label>
//           <Input
//             type="email"
//             name="email"
//             id="email"
//             value="igor.io756@gmail.com"
//           ></Input>
//           <SimpleTitle>Medidas Antropometricas</SimpleTitle>
//           <Label>Peso</Label>
//           <Input type="text"></Input>
//           <Label>Altura</Label>
//           <Input type="number"></Input>
//           <Label>IMC</Label>
//           <Input type="number"></Input>
//           <Label>Dobras Cutaneas</Label>
//           <Input type="number"></Input>
//           <Label>Curva de Crescimento</Label>
//           <Input type="number"></Input>
//           <Label>Curva Gestacional</Label>
//           <Input type="number"></Input>
//           <SimpleTitle>Recordatorio</SimpleTitle>
//           <Label>Café da Manhã</Label>
//           <TextArea rows="5" cols="33"></TextArea>
//           <Label> Almoço</Label>
//           <TextArea rows="5" cols="33"></TextArea>
//           <Label>Lanche da Tarde</Label>
//           <TextArea rows="5" cols="33"></TextArea>
//           <Label>Jantar</Label>
//           <TextArea rows="5" cols="33"></TextArea>
//           <Label>Ceia</Label>
//           <TextArea rows="5" cols="33"></TextArea>
//           <SimpleTitle>Medicamentos</SimpleTitle>
//           <Label>Medicamentos que o paciente consome</Label>
//           <TextArea rows="5" cols="40"></TextArea>
//           <SimpleTitle>Intolerancia e alergias</SimpleTitle>
//           <Label>
//             Descreva tudo o que o paciente tiver de alergias e intolerancia
//           </Label>
//           <TextArea rows="7" cols="40"></TextArea>
//           <Button onClick={() => setIsEditing(!isEditing)}>
//             {isEditing ? 'Salvar' : 'Editar'}
//           </Button>
//         </Form>
//       </PageBuilder>
//     </div>
//   );
// }
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import PageBuilder from '../../components/PageBuilder';
import Form from '../../components/Form';
import SimpleTitle from '../../components/SimpleTitle';
import Input from '../../components/Input';
import Label from '../../components/Label';
import TextArea from '../../components/TextArea';
import InputRadio from '../../components/InputRadio';
import Button from '../../components/Button';
import Imagem from '../../assets/images/igor.jpg';
import './PatientDetails.css';

export default function PatientDetails() {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValues, setEditedValues] = useState({
    nome: 'Igor Oliveira',
    telefone: '987870169',
    nascimento: '07/03/1997',
    genero: 'Masculino',
    email: 'igor.io756@gmail.com',
    peso: '85',
    altura: '1,82',
    imc: '',
    dobrasCutaneas: '',
    curvaCrescimento: '',
    curvaGestacional: '',
    cafeManha: 'Pão com ovo e café',
    almoco: '',
    lancheTarde: '',
    jantar: '',
    ceia: '',
    medicamentos: 'dipirona',
    alergias: 'a ovo',
  });

  const handleInputChange = (field, value) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    console.log(event);
    setIsEditing(false);
    toast.success('Dados editados com Sucesso');
  };

  return (
    <div>
      <PageBuilder>
        <Form>
          <img src={Imagem} alt="" />
          <SimpleTitle>
            {isEditing ? 'Editar informações' : 'Detalhes do Paciente'}
          </SimpleTitle>
          <Label>Nome</Label>
          <Input
            type="text"
            name="nome"
            id="nome"
            value={editedValues.nome}
            onChange={(e) => handleInputChange('nome', e.target.value)}
            disabled={!isEditing}
          />
          <Label>Telefone</Label>
          <Input
            type="tel"
            name="Telefone"
            id="Telefone"
            value={editedValues.telefone}
            onChange={(e) => handleInputChange('telefone', e.target.value)}
            disabled={!isEditing}
          />
          <Label>Data de nascimento</Label>
          <Input
            type="date"
            name="nascimento"
            id="nascimento"
            value={editedValues.nascimento}
            onChange={(e) => handleInputChange('nascimento', e.target.value)}
            disabled={!isEditing}
          />
          <Label>Gênero</Label>
          <fieldset className="fildset">
            <InputRadio
              name="genero"
              id="masculino"
              value="Masculino"
              checked={editedValues.genero === 'Masculino'}
              onChange={(e) => handleInputChange('genero', e.target.value)}
              disabled={!isEditing}
            />
            <InputRadio
              name="genero"
              id="feminino"
              value="Feminino"
              checked={editedValues.genero === 'Feminino'}
              onChange={() => handleInputChange('genero', 'Feminino')}
              disabled={!isEditing}
            />
            <InputRadio
              name="genero"
              id="outro"
              value="Outro"
              checked={editedValues.genero === 'Outro'}
              onChange={() => handleInputChange('genero', 'Outro')}
              disabled={!isEditing}
            />
          </fieldset>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={editedValues.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            disabled={!isEditing}
          ></Input>
          <SimpleTitle>Medidas Antropometricas</SimpleTitle>
          <Label>Peso</Label>
          <Input
            type="text"
            value={editedValues.peso}
            onChange={(e) => handleInputChange('peso', e.target.value)}
            disabled={!isEditing}
          />
          <Label>Altura</Label>
          <Input type="number"></Input>
          <Label>IMC</Label>
          <Input type="number"></Input>
          <Label>Dobras Cutaneas</Label>
          <Input type="number"></Input>
          <Label>Curva de Crescimento</Label>
          <Input type="number"></Input>
          <Label>Curva Gestacional</Label>
          <Input type="number"></Input>
          <SimpleTitle>Recordatorio</SimpleTitle>
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
          <SimpleTitle>Medicamentos</SimpleTitle>
          <Label>Medicamentos que o paciente consome</Label>
          <TextArea rows="5" cols="40"></TextArea>
          <SimpleTitle>Intolerancia e alergias</SimpleTitle>{' '}
          <Label>
            Descreva tudo o que o paciente tiver de alergias e intolerancia{' '}
          </Label>
          <TextArea rows="7" cols="40"></TextArea>
          {/* Adicione outros campos de input conforme necessário, 
          usando a mesma lógica */}
          {isEditing && <Button onClick={handleSaveClick}>Salvar</Button>}
          {!isEditing && <Button onClick={handleEditClick}>Editar</Button>}
        </Form>
      </PageBuilder>
    </div>
  );
}
