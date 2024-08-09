import { useNavigate } from 'react-router-dom';
import { Header, SuccessPageComponent } from '../../components';
import { SuccessPageContainer } from './style';

export const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <SuccessPageContainer>
        <SuccessPageComponent
          buttonTile="VOLTAR"
          buttonAction={() => navigate('/')}
        />
      </SuccessPageContainer>
    </>
  );
};
