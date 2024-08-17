import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import Icons from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import { appProjectsLinks } from "@/constants/projects";
import { ScreenWrapperScroll } from "@/components/wrappers/ScreenWrapper";
// import { appProjectsLinks } from "../constants/projects";
// import { ScreenWrapperScroll } from "../components/wrappers/ScreenWrapper";

export default Home = () => {
  const [projects, setProjects] = useState([]);

  const searchProject = (search) => {
    if (search && search.length > 2) {
      setProjects(
        appProjectsLinks.filter(
          (p) =>
            p.path.includes(search.toLowerCase()) ||
            p.label.includes(search.toLowerCase())
        )
      );
    } else {
      setProjects(appProjectsLinks);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setProjects(appProjectsLinks);
    }, 500);
  }, []);
  return (
    <ScreenWrapperScroll scrollbar style="bg-slate-100">
      <View className="py-10">
        <HeadComponent searchProject={searchProject} />
        {!projects.length ? (
          <View className="gap-4 items-center justify-center pt-3">
            <ActivityIndicator />
          </View>
        ) : (
          <View className="gap-4 pt-3">
            {projects.map((link, i) => (
              <TouchableOpacity
                key={i}
                // onPress={() => router.push(link.path)}
                onPress={() => router.push("explore")}
                className="w-full px-6">
                <View className="flex-row items-center gap-4 pb-5">
                  <Icons name="antdesign" size={28} color={"black"} />
                  <View className="flex-1">
                    <Text className="text-lg font-semibold">
                      {i + 1} {link.path}
                    </Text>
                    <Text>{link.label}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScreenWrapperScroll>
  );
};

const HeadComponent = ({ searchProject }) => {
  const [value, setValue] = useState("");
  const handleTextChange = (e) => {
    setValue(e);
    searchProject(e);
    // console.log(e);
  };
  return (
    <View className="px-6">
      <Text className="text-4xl">Projects</Text>
      <View className="my-6 flex-row items-center relative">
        <View className="absolute z-10 left-3">
          <Icons name="search1" size={20} color={"black"} />
        </View>
        <TextInput
          onChangeText={handleTextChange}
          placeholder="Search project"
          value={value}
          className="bg-white py-3 px-10 text-lg shadow-md flex-1 rounded-3xl"
        />
        <TouchableOpacity
          onPress={() => {
            setValue("");
            searchProject("");
          }}
          className="absolute right-3">
          {/* <Icons name="times" size={24} color={"black"} /> */}
          {value && <Text className="">❌</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};
