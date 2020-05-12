import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import GridContainer from '@crema/core/GridContainer';
import InfoView from '@crema/core/InfoView';
import {onGetEcommerceData} from '../../../redux/actions/Ecommerce';
import GridItem from './GridItem';

const GridView = () => {
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
            return <GridItem item={item} key={item.id} />;
          })}
        </GridContainer>
      ) : null}
      <InfoView />
    </>
  );
};

export default GridView;
