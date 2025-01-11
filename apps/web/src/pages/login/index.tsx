import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginPage = () => {
  return (
    <div style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        padding: 16,
        gap: 16,
      }}>
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
};

export default LoginPage;