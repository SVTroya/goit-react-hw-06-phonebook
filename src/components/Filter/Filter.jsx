import { FilterInputStyled } from './FilterInputStyled';
import { useDispatch, useSelector } from 'react-redux'
import { setFilterValue } from '../../redux/actions'
import { getFilterValue } from '../../redux/selectors'

export function Filter() {
  const filterValue = useSelector(getFilterValue)
  const dispatch = useDispatch()

  return (
    <FilterInputStyled
      type='text'
      name='filter'
      id={crypto.randomUUID()}
      value={filterValue}
      placeholder='Find conacts by name'
      onChange={({ target }) => dispatch(setFilterValue(target.value))} />
  );
}
