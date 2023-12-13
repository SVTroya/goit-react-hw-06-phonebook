import { FilterInputStyled } from './FilterInputStyled';
import PropTypes from 'prop-types';

export function Filter({ filter, onChange }) {
  return (
    <FilterInputStyled
      type='text'
      name='filter'
      id={crypto.randomUUID()}
      value={filter}
      placeholder='Find conacts by name'
      onChange={({ target: { value } }) => onChange(value)} />
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
