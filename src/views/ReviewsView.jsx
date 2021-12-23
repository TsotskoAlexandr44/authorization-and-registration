import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './HeaderView';
import { Footer } from './FooterView';
import { HiPencil, HiTrash } from 'react-icons/hi';
import { filmOperations, filmSelectors } from '../redux/film';
import Modal from '../components/Modal';
import { EditForm } from '../components/EditForm';

const FormContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #000046, #1cb5e0);
`;

const FilmsListItem = styled.div`
  width: 1200px;
  margin: 10px 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #636e72;
  border-radius: 15px;
  cursor: pointer;
`;

const FilmsListItemIcons = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
`;
const EditFilmIcon = styled(HiPencil)`
  font-size: 25px;
  color: #2d3436;
  &:hover {
    color: #016795;
  }
`;
const DeleteFilmIcon = styled(HiTrash)`
  font-size: 25px;
  color: #2d3436;
  &:hover {
    color: #016795;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const ReviewsView = () => {
  const dispatch = useDispatch();
  const filmsReview = useSelector(filmSelectors.getReviewMovie);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const handleFilmTitle = event => setTitle(event.target.value);
  const handleFilmDateOfRelease = event => setDate(event.target.value);
  const handleFilmDescription = event => setDescription(event.target.value);
  const handleName = event => setName(event.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      filmOperations.addReviews({
        name,
        title,
        date,
        description,
      }),
    );
    // console.log(name, date, description, title);
    setName('');
    setDate('');
    setDescription('');
    setTitle('');
  };

  const canCreateFilm = Boolean(name) && Boolean(date) && Boolean(description);

  const onDelete = id => dispatch(filmOperations.deleteReviews(id));

  return (
    <>
      <Header />
      <FormContainer>
        <CreateFilm>
          <CreateFilmFieldset>
            <CreateFilmLegend>Create review film</CreateFilmLegend>

            <CreateFilmField>
              <CreateFilmFieldLabel>Your name</CreateFilmFieldLabel>
              <CreateFilmFieldInput
                type="text"
                value={name}
                onChange={handleName}
              />
            </CreateFilmField>

            <CreateFilmField>
              <CreateFilmFieldLabel>Title</CreateFilmFieldLabel>
              <CreateFilmFieldInput
                type="text"
                value={title}
                onChange={handleFilmTitle}
              />
            </CreateFilmField>

            <CreateFilmField>
              <CreateFilmFieldLabel>Date of release</CreateFilmFieldLabel>
              <CreateFilmFieldInput
                type="date"
                value={date}
                onChange={handleFilmDateOfRelease}
              />
            </CreateFilmField>

            <CreateFilmField>
              <CreateFilmFieldLabel>Description</CreateFilmFieldLabel>
              <CreateFilmFieldTextArea
                value={description}
                onChange={handleFilmDescription}
              />
            </CreateFilmField>
            <CreateFilmButton onClick={handleSubmit} disabled={!canCreateFilm}>
              Create film
            </CreateFilmButton>
          </CreateFilmFieldset>
        </CreateFilm>
      </FormContainer>
      {filmsReview.length === 0 ? (
        <h1>Your movie list is still empty</h1>
      ) : (
        <ReviewsContainer>
          <h1 style={{ color: '#2d3436' }}>Reviews film's</h1>
          {filmsReview.map(({ id, name, title, date, description }) => (
            <FilmsListItem key={id}>
              <p>{name}</p>
              <p>{title}</p>
              <p>{date}</p>
              <p>{description}</p>
              <FilmsListItemIcons>
                <EditFilmIcon onClick={toggleModal} />
                <DeleteFilmIcon onClick={() => onDelete(id)} />
              </FilmsListItemIcons>
              {/* Modal */}
              {isModalOpen && (
                <Modal onClose={toggleModal}>
                  <EditForm onSave={toggleModal} id={id} />
                </Modal>
              )}
              {/* Modal */}
            </FilmsListItem>
          ))}
        </ReviewsContainer>
      )}
      <Footer />
    </>
  );
};
