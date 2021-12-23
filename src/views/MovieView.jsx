import { useState, useEffect } from 'react';
import { fetchTrending, URL } from '../services/movies-api';
import { Header } from './HeaderView';
import { Footer } from './FooterView';
import { Pagination } from '@material-ui/lab';
import { addBackToTop } from 'vanilla-back-to-top';
import useStyles from '../services/StylesPagination';
// import { Loader } from '../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  list-style: none;
`;

const Li = styled.li`
  margin: 20px;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgb(24, 154, 201);
  background-color: #e8eaee;
`;

const Img = styled.img`
  width: 300px;
  height: auto;
`;

const Paragraph = styled.p`
  font-size: 20px;
`;

const Title = styled.h2`
  letter-spacing: 5px;
  color: #03032e;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

const MainContainer = styled.div`
  background: linear-gradient(to right, #8360c3, #2ebf91);
`;

export const MovieView = () => {
  const [films, setFilms] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const location = useLocation();
  const history = useNavigate();
  const classes = useStyles();

  const page = new URLSearchParams(location.search).get('page') ?? 1;

  useEffect(() => {
    fetchTrending(page)
      .then(({ results, total_pages }) => {
        setFilms(results);
        setTotalPage(total_pages);
      })
      .catch(error => {
        alert('Something went wrong. Try again.');
      });
  }, [page]);

  useEffect(() => {
    addBackToTop({
      backgroundColor: '#189AC9',
      textColor: '#000',
      diameter: 80,
      cornerOffset: 80,
    });
  }, []);

  const onHandlePage = (event, page) => {
    history({ ...location, search: `page=${page}` });
  };

  return (
    <MainContainer>
      <Header />
      <Title>Trending today</Title>
      {films && (
        <>
          <Ul>
            {films.map(film => (
              <Li key={film.id}>
                <Img
                  src={URL + film.poster_path}
                  alt={film.title}
                  width="300"
                  height="450"
                />
                <Paragraph>{film.title}</Paragraph>
              </Li>
            ))}
          </Ul>
          {totalPage > 1 && (
            <Pagination
              className={classes.root}
              count={10}
              onChange={onHandlePage}
              page={Number(page)}
              showFirstButton
              showLastButton
              size="large"
              shape="rounded"
              variant="outlined"
            />
          )}
        </>
      )}
      <Footer />
    </MainContainer>
  );
};
