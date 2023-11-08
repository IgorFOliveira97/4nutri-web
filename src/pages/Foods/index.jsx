import PageBuilder from '../../components/PageBuilder';
import SearchBar from '../../components/SearchBar';
import SimpleTitle from '../../components/SimpleTitle';
import './foods.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Button from '../../components/Button';

Modal.setAppElement('#root');

export default function Foods() {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <PageBuilder pageName="Tabela de Alimentos" userName="João Pablo">
      <SearchBar
        button="Novo Alimento"
        navigate="/foods/registration"
        color="#3CB371"
      >
        {' '}
      </SearchBar>
      <div className="divFoods">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <SimpleTitle>Alimento selecionado</SimpleTitle>
          <br />
          <SimpleTitle>Banana</SimpleTitle>
          <br />
          <table className="info-table">
            <tbody>
              <tr>
                <td>Calcio:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Magnesio:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Descrição:</td>
                <td>Fruta</td>
              </tr>
              <tr>
                <td>Vitamina C:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Energia:</td>
                <td>50 kcal</td>
              </tr>
              <tr>
                <td>Proteina:</td>
                <td>20 g</td>
              </tr>
              <tr>
                <td>Lipideos:</td>
                <td>20 g</td>
              </tr>
              <tr>
                <td>Colesterol:</td>
                <td>20 mg</td>
              </tr>
              <tr>
                <td>Carboidrato:</td>
                <td>20 g</td>
              </tr>
              <tr>
                <td>Fibra Alimentar:</td>
                <td>20 g</td>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => navigate('/foods/edit')}>Editar</Button>
          <Button onClick={closeModal}>Fechar</Button>
        </Modal>
        <SimpleTitle>Alimentos cadastrados</SimpleTitle>
        <br />
        <ol>
          <li className="liFoods" onClick={openModal}>
            Banana
          </li>
          <li className="liFoods" onClick={openModal}>
            Salada
          </li>
          <li className="liFoods">Hamburguer</li>
          <li className="liFoods">Queijo</li>
          <li className="liFoods">Barra de cereal</li>
        </ol>
      </div>
    </PageBuilder>
  );
}
