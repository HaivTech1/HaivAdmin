import cookie from 'cookie';
import { isLoggedIn } from '../utils/helper';
import redirectTo from './redirectTo';

export default function withAuth(Component) {
  const AuthComponent = (props) => {
    return <Component {...props} />;
  };

  AuthComponent.getInitialProps = (context) => {
    const isUserLoggedIn = isLoggedIn(context?.req?.headers?.cookie || '');

    console.log(isUserLoggedIn);

    if (!isUserLoggedIn) {
      redirectTo('/auth/signin', context);
    }

    return { user: { isLoggedIn: isUserLoggedIn } };
  };

  return AuthComponent;
}
