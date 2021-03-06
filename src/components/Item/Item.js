import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import classnames from 'classnames';

class Item extends React.Component{

  render(){
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return(
      <div className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          id={id}
          defaultChecked={isDone}
        />
        <label
          htmlFor={id}
          onClick={() => onClickDone(id)}
        >
          <span className={
            classnames({
              [styles.text]: true,
              [styles.done]: isDone
            })}
          >
            {value}
          </span>
        </label>
        <button
          className={styles.btn}
          onClick={() => onClickDelete(id)}
        />
      </div>
    )
  }
}

export default Item;

Item.defaultProps = {
  value: '',
  isDone: false
};

Item.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
