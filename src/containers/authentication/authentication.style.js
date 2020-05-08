import { makeStyles } from '@material-ui/core/styles';

const useAuthStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 45,
    margin: 'auto',
    maxWidth: 540,
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  linkStyle: {
    color: '#64ffda'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  formField: {
    minWidth: '70%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useAuthStyles;
