const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getFetchingCurrentUser = state => state.auth.user.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getFetchingCurrentUser,
};
export default authSelectors;
