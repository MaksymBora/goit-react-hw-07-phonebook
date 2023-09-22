import AddIcon from '@mui/icons-material/Add';
import {
  PaperStyled,
  StyledLink,
  BtnText,
  MobStyledLink,
} from './CreateContactBtn.styled';

export const CreateContact = () => {
  return (
    <>
      <StyledLink to="/addContact" style={{ textDecoration: 'none' }}>
        <PaperStyled
          elevation={3}
          sx={{
            borderRadius: '25px',
            p: '12px 10px 12px 10px',
            alignItems: 'center',
            minWidth: '150px',
            display: 'flex',
            gap: '5px',
          }}
        >
          <AddIcon type="button" sx={{ ml: 'auto', mr: 'auto' }} />
          <BtnText>Create contact</BtnText>
        </PaperStyled>
      </StyledLink>

      <MobStyledLink to="/addContact" style={{ textDecoration: 'none' }}>
        <PaperStyled
          elevation={3}
          sx={{
            borderRadius: '50%',
            p: '12px',
            alignItems: 'center',
            width: '50px',
            display: 'flex',
          }}
        >
          <AddIcon type="button" sx={{ ml: 'auto', mr: 'auto' }} />
        </PaperStyled>
      </MobStyledLink>
    </>
  );
};
