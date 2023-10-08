import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';
import { TextField } from '@mui/material';

export default function Filter() {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <TextField
        onChange={handleInputChange}
        fullWidth
        id="search-textfield"
        placeholder="Search by name"
        type="text"
        variant="standard"
        color="primary"
      />
    </div>
  );
}
