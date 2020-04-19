import { makeStyles } from '@material-ui/core/styles';

const useHomePageStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(4, 5),
    textAlign: 'center'
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

export default useHomePageStyles;
