/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import history from '~/services/history';

import { signInSuccess } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.svg';
import { Form, Input, Button } from 'antd';
import { LockOutlined, LoginOutlined, MailOutlined } from '@ant-design/icons';

const SignIn = () => {
  const dispatch = useDispatch();
  const [formRef] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) =>
    setRequiredMarkType(requiredMarkValue);

  const handleSubmit = () => {
    const { user, password } = formRef.getFieldsValue();

    dispatch(signInSuccess(user, password));

    history.push('/home');
  };

  return (
    <>
      <img
        src={logo}
        alt="Rs Auto"
        width="200"
        style={{ padding: '20px 0px' }}
      />
      <Form
        onFinish={() => handleSubmit()}
        onFinishFailed={() =>
          toast.error(
            'Falha ao realizar o login. Verifique seus dados e tente novamente!'
          )
        }
        form={formRef}
        layout="vertical"
        onValuesChange={onRequiredTypeChange}
        requiredMark={requiredMark}
      >
        <Form.Item
          size="large"
          label="E-mail"
          name="user"
          validateTrigger={['onChange', 'onBlur']}
          rules={[
            {
              type: 'email',
              required: true,
              message: 'O e-mail é inválido',
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Digite o seu e-mail" />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          validateTrigger={['onChange', 'onBlur']}
          rules={[
            {
              type: 'string',
              required: true,
              message: 'A senha é inválida!',
            },
          ]}
        >
          <Input.Password
            size="large"
            prefix={<LockOutlined />}
            placeholder="Digite a sua senha"
          />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            icon={<LoginOutlined />}
            type="primary"
            htmlType="submit"
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignIn;
