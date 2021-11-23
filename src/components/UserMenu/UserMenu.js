import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { resetState } from '../../redux/contacts/contacts-actions';
import Button from '@mui/material/Button';
import defaultAvatar from './defaultAvatar.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const email = useSelector(authSelectors.getUsermail);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <div className={s.mail}>
        <a href={`mailto:${email}`}> {email}</a>
      </div>
      <div className={s.wrapper}>
        <img src={avatar} alt="" width="64" className={s.avatar} />
        <span className={s.name}>WELLCOME HOME, {name}</span>

        <Button
          type="button"
          onClick={() => { dispatch(authOperations.logOut()); dispatch(resetState())}}
          variant="contained"
          sx={{ width: 300, mt: 3, mb: 2 }}
        >
          EXIT
        </Button>
      </div>
    </div>
  );
}
