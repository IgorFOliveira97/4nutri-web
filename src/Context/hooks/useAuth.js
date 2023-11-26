import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function useAuth() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      axios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
      setUserData(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  async function handleLogin(loginData) {
    await axios
      .post('login', loginData)
      .then((response) => {
        if (response.status == 200) {
          const accessToken = response.data.accessToken;
          const user = response.data.user;
          if (accessToken) {
            localStorage.setItem('token', JSON.stringify(accessToken));
            localStorage.setItem('user', JSON.stringify(user));
            axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
            setAuthenticated(true);
            setLoading(false);
            toast.success('Login realizado com sucesso!');
            navigate('/');
          } else {
            toast.error('Ocorreu um erro! Entre em contato com o suporte!');
            setLoading(false);
          }
        } else if (response.status == 401) {
          toast.error('E-mail ou senha inválidos!');
          setLoading(false);
        }
      })
      .catch((error) => {
        toast.error('Ocorreu um erro no login!');
        console.log(error);
      });
  }
  return { authenticated, loading, handleLogin, userData };
}
