import Cookies from 'js-cookie';
import client from './client';
import redirectTo from './redirectTo';

export const signin = async (values) => {
  try {
    const { data } = await client.post('/user/signin', { ...values });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const signup = async (values) => {
  try {
    const { data } = await client.post('/user/create', { ...values });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const verifyEmail = async (otp, userId) => {
  try {
    const { data } = await client.post('/user/verify-email', { otp, userId });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) {
      return response.data;
    }
    return { error: error.message || error };
  }
};

export const signout = async () => {
  await client
    .post('/api/users/logout')
    .then((response) => {
      console.log(response.data);
      redirectTo('/auth/signin');
    })
    .catch((error) => {
      console.log(error);
    });
};
