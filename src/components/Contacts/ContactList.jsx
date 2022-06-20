import PropTypes from 'prop-types';
import { Button } from 'components/Button';
import { InputFilter } from './InputFilter';
import style from './ContactList.module.css';

export const ContactList = ({ value, handleBtn, onChange, filterContacts }) => {
  return (
    <>
      <InputFilter name="filter" value={value} onChange={onChange} />
      <ul>
        {filterContacts.map(({ name, phone, id }) => {
          return (
            <li key={id} className={style.contact} id={id}>
              {name}: {phone}
              <Button
                type="button"
                className={style.remBtn}
                name="Delete"
                handleBtn={handleBtn}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  value: PropTypes.string.isRequired,
  handleBtn: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  filterContacts: PropTypes.array.isRequired,
};
