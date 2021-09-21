import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/search');
  } catch (error) {
    console.log(error);
  }
};

export const signin2 = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn2(formData);

    dispatch({ type: AUTH, data });

    router.push('/search');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/search');
  } catch (error) {
    console.log(error);
  }
};

export const signup2 = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp2(formData);

    dispatch({ type: AUTH, data });

    router.push('/search');
  } catch (error) {
    console.log(error);
  }
};