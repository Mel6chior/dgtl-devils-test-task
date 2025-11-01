import FormLayout from "../../components/FormLayout/FormLayout";

const LoginPage = () => {
  return (
    <>
      <FormLayout>
        <input type="email" placeholder="Email" name="email"/>
        <input type="password" placeholder="Password" name="password"/>
        <button>Login</button>
      </FormLayout>
    </>
  );
};

export default LoginPage;