import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
  index: (props) => (
    <AntDesign name="home" size={26} color={"gray"} {...props} />
  ),
  create: (props) => (
    <Feather name="compass" size={26} color={"gray"} {...props} />
  ),
  options: (props) => (
    <AntDesign name="pluscircle" size={26} color={"gray"} {...props} />
  ),
  profile: (props) => (
    <AntDesign name="user" size={26} color={"gray"} {...props} />
  ),
};
