//ComPONENTS
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import PageBuilder from '../../components/PageBuilder';
import PatientData from '../../components/PatientData';
import Measures from '../../components/Measures';
import Recordatorio from '../../components/Recordatorio';
import Button from '../../components/Button';

//HOOKS
import { userForm } from '../../hooks/useForm';
//CSS
import './PatientRegistration.css';

export default function PatientRegistration() {
  const formComponents = [
    <PatientData key={PatientData.id} />,
    <Measures key={Measures.id} />,
    <Recordatorio key={Recordatorio.id} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    userForm(formComponents);

  return (
    <PageBuilder>
      <div className="form-container">
        <h2>Cadastre seu Paciente</h2>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <Button>
                {' '}
                Avançar
                <GrFormNext />
              </Button>
            ) : (
              <button type="submit">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </PageBuilder>
  );
}
