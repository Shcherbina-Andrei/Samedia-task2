export const login = async (login, password) => {
  const res = await fetch(`https://test-works.pr-uni.ru/api/login/index.php?login=${login}&password=${password}`);
  const data = await res.json();
  if (data.status === 'ok') {
    document.cookie = `token=${data.token}`;
    return data.user;
  }

  throw new Error(data.errorMessage);
};
