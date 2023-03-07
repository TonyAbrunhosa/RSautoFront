/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';

import { signInSuccess } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.svg';

import { Content } from './styles';

const schema = Yup.object().shape({
  user: Yup.string()
    .email('Insira um e-mail válido')
    .required('O usuário é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    // dispatch(signInRequest(user, password));
    dispatch(signInSuccess('', ''));
    history.push('/home');
  }

  return (
    <>
      <Content>
        <img src={logo} alt="Rs Auto" width="363.07px" height="253px" />
        <Form schema={schema} onSubmit={() => handleSubmit()}>
          <div>
            <label htmlFor="user">Usuário</label>
            <Input
              id="user"
              name="user"
              type="email"
              placeholder="Seu usuário"
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Sua senha"
            />
          </div>
          <button type="submit">{loading ? 'Carregando...' : 'Login'}</button>
        </Form>
      </Content>
    </>
  );
};

export default SignIn;
