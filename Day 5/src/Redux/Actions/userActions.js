
export const SET_USERNAME = 'SET_USERNAME';

export const setUserName = (username) => {
  localStorage.setItem('username', username);

  return {
    type: SET_USERNAME,
    payload: username,
  };
};
