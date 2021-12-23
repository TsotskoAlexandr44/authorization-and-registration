import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Header } from './HeaderView';
import { Footer } from './FooterView';
import styled from 'styled-components';

const Form = styled.form`
  width: 450px;
`;

const FormTitle = styled.h1`
  color: #fff;
  font-size: 47px;
  letter-spacing: 5px;
  margin-bottom: 100px;
`;

const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  color: #fff;
  font-size: 20px;
`;

const LabelText = styled.span`
  margin-bottom: 15px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: none;
  outline: none;
  margin-left: -40px;
  width: 490px;
`;

const FormInputFile = styled.input`
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  content: none;
  color: #fff;
  display: inline-block;
  background-color: #002d63;
  border-radius: 5px;
  padding: 10px 15px;
  margin-left: -40px;
  outline: none;
  cursor: pointer;
  &:hover::before {
    border-color: black;
  }
  &:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;

const FormButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
  color: #000046;
  font-weight: 700;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #07306f;
    color: #fff;
  }
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const FormContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #000046, #1cb5e0);
`;

export const EditProfileView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [avatar, setAvatar] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || name === '' || avatar === '') {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [avatar, name, nameError]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return nameHandler(value);
      case 'avatar':
        return setAvatar(value);
      default:
        return;
    }
  };

  const nameHandler = value => {
    setName(value);
    if (value.length < 2) {
      setNameError('The name should not be shorter than 2 characters');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.editCurrentUser({ name, avatar }));
    setName('');
    setAvatar('');
  };

  return (
    <>
      <Header />
      <FormContainer>
        <FormTitle>Edit your name and Avatar</FormTitle>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <LabelForm>
            <LabelText>Name</LabelText>
            {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your name..."
            />
          </LabelForm>

          <LabelForm for="files">
            <LabelText>Choose a new avatar</LabelText>
            <FormInputFile
              id="files"
              type="file"
              name="avatar"
              value={avatar}
              onChange={handleChange}
            />
          </LabelForm>

          <FormButtonContainer>
            <FormButton disabled={!formValid} type="submit">
              Edit
            </FormButton>
          </FormButtonContainer>
        </Form>
      </FormContainer>
      <Footer />
    </>
  );
};
