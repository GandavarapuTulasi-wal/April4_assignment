const Logout = () => {
  localStorage.removeItem('token');
  window.location.pathname = '/';
  return <div>Logout succesfull</div>;
};
export default Logout;
