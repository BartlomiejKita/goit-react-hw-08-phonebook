import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from './redux/Actions';

const Filterbox = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  box-sizing: border-box;

  &:focus ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }

  &:not(:placeholder-shown) ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
`;

const FilteredUsers = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <Filterbox>
      <label>
        <Input
          onChange={onFilter}
          type="text"
          value={filter}
          name="filter"
          placeholder=" "
        />
        <Span>Find contacts by name</Span>
      </label>
    </Filterbox>
  );
};

export default FilteredUsers;
