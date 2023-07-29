import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';
import css from './Filter.module.css';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChangeFilter = event =>
    dispatch(setFilter(event.target.value));

  return (
    <>
      <div className={css.filter}>
        <p className={css.filterTitle}>Search contacts</p>
        <input
          className={css.input}
          name="filter"
          onChange={handleInputChangeFilter}
          placeholder="Your contact name"
        />
      </div>
    </>
  );
};
