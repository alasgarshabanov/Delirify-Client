import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: 45,
    margin: 'auto',
    maxWidth: 500,
  },
  input: {
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
