import React from 'react';
import Form from '../Form';
import Label from '../Label';

const Measures = () => {
  return (
    <div>
      <Form>
        <h2>Dados de medidas</h2>
        <Label>Peso</Label>
        <Label>Altura</Label>
        <Label>IMC</Label>
        <Label>Dobras Cutaneas</Label>
        <Label>Curva de Crescimento</Label>
        <Label>Curva Gestacional</Label>
      </Form>
    </div>
  );
};
export default Measures;
