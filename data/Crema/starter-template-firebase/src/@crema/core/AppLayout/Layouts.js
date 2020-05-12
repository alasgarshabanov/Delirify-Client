import HorDefault from './HorDefault';
import MiniSidebar from './MiniSidebar';
import DrawerLayout from './DrawerLayout';
import Standard from './Standard';
import BitBucket from './BitBucket';
import HorLightNav from './HorLightNav';
import HorDarkLayout from './HorDarkLayout';
import {NavStyle} from '../../../shared/constants/AppEnums';

const Layouts = {
  [NavStyle.STANDARD]: Standard,
  [NavStyle.MINI]: MiniSidebar,
  [NavStyle.DRAWER]: DrawerLayout,
  [NavStyle.BIT_BUCKET]: BitBucket,
  [NavStyle.H_DEFAULT]: HorDefault,
  [NavStyle.HOR_LIGHT_NAV]: HorLightNav,
  [NavStyle.HOR_DARK_LAYOUT]: HorDarkLayout,
};
export default Layouts;
