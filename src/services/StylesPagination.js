import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '30px',
    display: 'flex',
    justifyContent: 'center',
    '& .MuiPaginationItem-page.Mui-selected, & .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible,  & .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible':
      {
        backgroundColor: '#189AC9',
      },
    '& .MuiPaginationItem-root': {
      color: '#000000',
    },
    '& .MuiPaginationItem-page:hover, & .MuiPaginationItem-page.Mui-focusVisible':
      {
        opacity: '0.7',
      },
    '& .MuiPaginationItem-page.Mui-selected:hover, & .MuiPaginationItem-page.Mui-selected.Mui-focusVisible':
      {
        opacity: '1',
      },
    '& .MuiPagination-ul': {
      justifyContent: 'center',
    },
  },
});

export default useStyles;
