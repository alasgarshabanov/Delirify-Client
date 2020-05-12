import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  onAddNewList,
  onGetBoardDetail,
  onNullifyBoardDetail,
} from '../../../../redux/actions/ScrumboardApp';
import {useHistory, useLocation} from 'react-router-dom';
import AddNewList from './AddNewList';
import {Scrollbar} from '@crema';
import Box from '@material-ui/core/Box';
import AddCard from './List/AddCard';
import List from './List';
import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import {Fonts} from '../../../../shared/constants/AppEnums';

const BoardDetail = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const boardDetail = useSelector(
    ({scrumboardApp}) => scrumboardApp.boardDetail,
  );
  const {pathname} = useLocation();

  useEffect(() => {
    const path = pathname.split('/');
    const id = path[path.length - 1];
    dispatch(onGetBoardDetail(id));
    return () => {
      dispatch(onNullifyBoardDetail());
    };
  }, [dispatch, pathname]);

  const [list, setList] = useState(null);

  const [isAddCardOpen, setAddCardOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const onClickAddCard = list => {
    setList(list);
    setSelectedCard(null);
    setAddCardOpen(true);
  };

  const onCloseAddCard = () => {
    setAddCardOpen(false);
  };

  const onAddList = name => {
    dispatch(onAddNewList(boardDetail.id, {name}));
  };

  const onEditCardDetail = (card, list) => {
    setSelectedCard(card);
    setList(list);
    setAddCardOpen(true);
  };

  const onGoToBoardList = () => {
    history.goBack();
  };

  const useStyles = makeStyles(theme => ({
    pointer: {
      cursor: 'pointer',
    },
  }));

  const classes = useStyles(props);

  return (
    <Box flex={1} display='flex' flexDirection='column'>
      {boardDetail ? (
        <>
          <Box mb={{xs: 2, lg: 4, xl: 6}} display='flex'>
            <Box
              component='h2'
              color='text.primary'
              fontFamily={Fonts.BOLD}
              fontSize={{xs: 18, sm: 24, xl: 28}}>
              <Box
                mr={2}
                component='span'
                color='primary.main'
                className={classes.pointer}
                onClick={onGoToBoardList}>
                Scrum Board
              </Box>
              > {boardDetail.name}
            </Box>
          </Box>
          <Box className='scrum-relative'>
            <Scrollbar className='scrum-absolute'>
              <Box className='scrum-row'>
                {boardDetail.list &&
                  boardDetail.list.length > 0 &&
                  boardDetail.list.map(list => {
                    return (
                      <List
                        key={list.id}
                        list={list}
                        boardId={boardDetail.id}
                        onEditCardDetail={onEditCardDetail}
                        onClickAddCard={onClickAddCard}
                      />
                    );
                  })}
                <Box
                  p={2}
                  display='flex'
                  flexDirection='column'
                  bgcolor={grey[300]}
                  className='scrum-col'>
                  <AddNewList onAddList={onAddList} />
                </Box>
              </Box>
            </Scrollbar>
          </Box>
        </>
      ) : null}
      {isAddCardOpen ? (
        <AddCard
          isAddCardOpen={isAddCardOpen}
          onCloseAddCard={onCloseAddCard}
          list={list}
          board={boardDetail}
          selectedCard={selectedCard}
        />
      ) : null}
    </Box>
  );
};

export default BoardDetail;
