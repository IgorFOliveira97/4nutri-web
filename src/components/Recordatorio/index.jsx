import React from 'react';
import Form from '../Form';
import TextAreaWithLabel from '../TextAreaWithLabel';
import './recordatorio.css';
import SimpleTitle from '../SimpleTitle';

const Recordatorio = () => {
  return (
    <div>
      <Form>
        <SimpleTitle>Recordatorio</SimpleTitle>
        <TextAreaWithLabel>Café da Manhã</TextAreaWithLabel>
        <textarea id="almoco" name="almoco" rows="5" cols="33"></textarea>
        <TextAreaWithLabel> Almoço</TextAreaWithLabel>
        <textarea id="almoco" name="almoco" rows="5" cols="33"></textarea>
        <TextAreaWithLabel>Lanche da Tarde</TextAreaWithLabel>
        <textarea id="almoco" name="almoco" rows="5" cols="33"></textarea>
        <TextAreaWithLabel>Jantar</TextAreaWithLabel>
        <textarea id="almoco" name="almoco" rows="5" cols="33"></textarea>
        <TextAreaWithLabel>Ceia</TextAreaWithLabel>
        <textarea id="almoco" name="almoco" rows="5" cols="33"></textarea>
      </Form>
    </div>
  );
};
export default Recordatorio;
