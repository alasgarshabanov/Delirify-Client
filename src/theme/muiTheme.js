import { createMuiTheme } from '@material-ui/core/styles';
import { teal, yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Raleway, Arial',
  },
  fontSize: 12,
  htmlFontSize: 10,
  palette: {
    type: 'dark',
    primary: teal,
    secondary: yellow,
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        color: '#212121',
      },
    },
  },
  shape: {
    borderRadius: 0
  }
});

export default theme;
