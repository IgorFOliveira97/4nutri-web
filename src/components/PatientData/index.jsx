import React from 'react';
import Form from '../Form';
import Input from '../Input';
import Label from '../Label';
import InputRadio from '../InputRadio';

const PatientData = () => {
  return (
    <div>
      <Form>
        <h2>Dados Pessoais</h2>
        <Label>Nome</Label>
        <Input type="text" name="nome" id="nome"></Input>

        <Label>Telefone</Label>
        <Input type="tel" name="Telefone" id="Telefone"></Input>

        <Label>Data de nascimento</Label>
        <Input type="date" name="nascimento" id="nascimento"></Input>

        <Label>Gênero</Label>
        <fieldset className="fildset">
          <InputRadio
            name="genero"
            id="masculino"
            value="Masculino"
          ></InputRadio>
          <InputRadio name="genero" id="feminino" value="Feminino"></InputRadio>
          <InputRadio name="genero" id="outro" value="Outro"></InputRadio>
        </fieldset>
        <Label>Email</Label>
        <Input type="email" name="email" id="email"></Input>
      </Form>
    </div>
  );
};
export default PatientData;
