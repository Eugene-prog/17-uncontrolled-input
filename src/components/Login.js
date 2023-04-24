function Login() {
  return(
  <>
    <h1>Login Form</h1>
    <form>
      <label>Username:
        <input type="text" name="username"/> 
      </label>
      <label>Password:
        <input type="password" name="password"/> 
      </label>
      <button>Login</button>
    </form>
  </>
  );
}

export default Login;