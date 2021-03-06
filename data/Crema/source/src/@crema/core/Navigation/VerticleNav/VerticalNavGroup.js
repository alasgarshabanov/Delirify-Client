import React from 'react';
import {ListItem} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import VerticalCollapse from './VerticalCollapse';
import VerticalItem from './VerticalItem';
import IntlMessages from '../../../utility/IntlMessages';
import useStyles from './VerticalNavGroup.style';

const VerticalNavGroup = props => {
  const classes = useStyles(props);
  const {item, level} = props;

  return (
    <>
      <ListItem
        component='li'
        className={clsx(classes.navItem, 'nav-item nav-item-header')}>
        {<IntlMessages id={item.messageId} />}
      </ListItem>

      {item.children && (
        <>
          {item.children.map(item => (
            <React.Fragment key={item.id}>
              {item.type === 'group' && (
                <NavVerticalGroup item={item} level={level} />
              )}

              {item.type === 'collapse' && (
                <VerticalCollapse item={item} level={level} />
              )}

              {item.type === 'item' && (
                <VerticalItem item={item} level={level} />
              )}
            </React.Fragment>
          ))}
        </>
      )}
    </>
  );
};

VerticalNavGroup.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    children: PropTypes.array,
  }),
};

VerticalNavGroup.defaultProps = {};

const NavVerticalGroup = withRouter(React.memo(VerticalNavGroup));

export default NavVerticalGroup;
