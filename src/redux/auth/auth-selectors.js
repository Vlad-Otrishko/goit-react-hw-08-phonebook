const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUsermail = state => state.auth.user.email;

const getToken =state=>state.auth.token

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUsermail,
  getToken,
};
export default authSelectors;
