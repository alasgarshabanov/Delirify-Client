import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetEcommerceData} from '../../../redux/actions/Ecommerce';
import GridContainer from '@crema/core/GridContainer';
import InfoView from '@crema/core/InfoView';
import ListItem from './ListItem';

const ListView = () => {
  const dispatch = useDispatch();

  const ecommerceList = useSelector(({ecommerce}) => ecommerce.ecommerceList);

  useEffect(() => {
    dispatch(onGetEcommerceData());
  }, [dispatch]);

  return (
    <>
      {ecommerceList ? (
        <GridContainer>
          {ecommerceList.map(item => {
            return <ListItem item={item} key={item.id} />;
          })}
        </GridContainer>
      ) : null}
      <InfoView />
    </>
  );
};

export default ListView;
