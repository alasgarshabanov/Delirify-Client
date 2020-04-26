import { makeStyles } from '@material-ui/core/styles';

const useLayoutStyles = makeStyles(theme => ({
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1'
  },
  appMain: {
    position: 'relative',
    minHeight: '100vh'
  },
  footer: {
    bottom: 0,
    marginTop: "calc(5% + 60px)",
    position: 'sticky',
  },

}));

export default useLayoutStyles;
