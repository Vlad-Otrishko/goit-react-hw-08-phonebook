const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getUsermail = state => state.auth.user.email;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUsermail,
};
export default authSelectors;
