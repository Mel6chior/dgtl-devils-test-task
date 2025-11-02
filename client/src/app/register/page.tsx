import FormLayout from "../../components/FormLayout/FormLayout";

const RegisterPage = () => {
  return (
    <>
      <FormLayout>
        <input type="email" placeholder="Email" name="email"/>
        <input type="text" placeholder="Login" name="login"/>
        <input type="text" placeholder="Name" name="name"/>
        <input type="password" placeholder="Password" name="password"/>
        <button>Register</button>
      </FormLayout>
    </>
  );
};

export default RegisterPage;