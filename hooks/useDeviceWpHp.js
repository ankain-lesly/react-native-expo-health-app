import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const useDeviceWpHp = () => {
  return { wp, hp };
};

export default useDeviceWpHp;
