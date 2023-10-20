import PageBuilder from '../../components/PageBuilder';
import TextArea from '../../components/TextAreaWithLabel';
import './user.css';
export default function User() {
  return (
    <PageBuilder pageName="Meus Dados" userName="João Pablo">
      <div className="container">
        <div className="dados-pessoais">
          <TextArea label="Nome">João Pablo Vilanir</TextArea>
          <TextArea label="Data de Nascimento">14/10/2002</TextArea>
          <TextArea label="CRM">123-456</TextArea>
        </div>
        <div className="contato">
          <TextArea label="E-mail">joaopablo778@gmail.com</TextArea>
          <TextArea label="Celular">(11) 95355-3207</TextArea>
          <TextArea label="Telefone">(11) 4245-8911</TextArea>
        </div>
      </div>
    </PageBuilder>
  );
}
