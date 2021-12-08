const Auth = {
  authenticate() {
    localStorage.setItem("_token", "syudgfonlcjbrifalksn");
  },
  signout() {
    localStorage.removeItem("_token");
  },
  getAuth() {
    return localStorage.getItem("_token") ? true : false;
  },
};
export default Auth;
