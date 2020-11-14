export const useLocalStorage = () => {
  //Setter
  const handleSave = (tokenInfo) => {
    const token = localStorage.getItem('token') ?? '[]';
    const parsedToken = JSON.parse(token);

    parsedToken.push(tokenInfo);

    const stringifiedToken = JSON.stringify(parsedToken);

    localStorage.setItem('token', stringifiedToken);
  };
  //Fin del setter

  //Getter
  const getToken = localStorage.getItem('token') ?? '[]';
  const parsedToken = JSON.parse(getToken);
  //Fin del getter

  return [parsedToken, handleSave];
};