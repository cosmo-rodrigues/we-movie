import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundContainer } from './style';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, seconds * 1000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, [navigate, seconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <NotFoundContainer>
      <h1>404 - Not Found</h1>
      <br />
      <p>Page not found, going to home... {seconds}</p>
    </NotFoundContainer>
  );
};
