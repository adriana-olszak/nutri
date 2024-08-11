import { UserAuthForm } from '../components/UserAuthForm';
import { LoginLayout } from '../components/LoginLayout';

export const AuthenticationPage = () => {
  return (
    <LoginLayout>
      <UserAuthForm />
    </LoginLayout>
  );
};
