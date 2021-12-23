import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { filmOperations } from '../../redux/film';

const FormContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #000046, #1cb5e0);
`;

const CreateFilm = styled.div`
  color: #000;
`;

const CreateFilmFieldset = styled.fieldset`
  width: 620px;
  border-color: #016795;
  padding: 50px;
  border-radius: 15px;
  background-color: #dadaf1;
  display: flex;
  flex-direction: column;
`;

const CreateFilmLegend = styled.legend`
  text-transform: uppercase;
  font-weight: 600;
  font-style: italic;
  font-size: 30px;
  color: Red;
  border-radius: 15px;
`;

const CreateFilmField = styled.div``;
const CreateFilmFieldLabel = styled.label``;
const CreateFilmFieldInput = styled.input`
  width: 100%;
`;
const CreateFilmFieldTextArea = styled.textarea`
  width: 100%;
`;
const CreateFilmButton = styled.button`
  cursor: pointer;
  margin-top: 15px;
  height: 40px;
`;

export const EditForm = ({ id }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const handleFilmTitle = event => setTitle(event.target.value);
  const handleFilmDateOfRelease = event => setDate(event.target.value);
  const handleFilmDescription = event => setDescription(event.target.value);
  const handleName = event => setName(event.target.value);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      filmOperations.editReviews({
        id,
        name,
        title,
        date,
        description,
      }),
    );
    // console.log(id, name, date, description, title);
    setName('');
    setDate('');
    setDescription('');
    setTitle('');
    navigate('/movie');
  };

  const canCreateFilm = Boolean(name) && Boolean(date) && Boolean(description);

  return (
    <>
      <FormContainer>
        <CreateFilm>
          <CreateFilmFieldset>
            <CreateFilmLegend>Edit film</CreateFilmLegend>
            <CreateFilmFieldLabel>Your name</CreateFilmFieldLabel>
            <CreateFilmField>
              <CreateFilmFieldInput
                type="text"
                value={name}
                onChange={handleName}
              />
            </CreateFilmField>
            <CreateFilmFieldLabel>Title</CreateFilmFieldLabel>
            <CreateFilmField>
              <CreateFilmFieldInput
                type="text"
                value={title}
                onChange={handleFilmTitle}
              />
            </CreateFilmField>
            <CreateFilmFieldLabel>Date of release</CreateFilmFieldLabel>
            <CreateFilmField>
              <CreateFilmFieldInput
                type="date"
                value={date}
                onChange={handleFilmDateOfRelease}
              />
            </CreateFilmField>
            <CreateFilmFieldLabel>Description</CreateFilmFieldLabel>
            <CreateFilmField>
              <CreateFilmFieldTextArea
                value={description}
                onChange={handleFilmDescription}
              />
            </CreateFilmField>
            <CreateFilmButton onClick={handleSubmit} disabled={!canCreateFilm}>
              Edit film
            </CreateFilmButton>
          </CreateFilmFieldset>
        </CreateFilm>
      </FormContainer>
    </>
  );
};
