import { Link } from "expo-router";
import { Pressable, Text } from "react-native";
import tw from "./tailwind";

type LinkButtonProps = {
  href: string;
  label: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, label }) => (
  <Link href={href} asChild>
    <Pressable
      style={tw`flex-1 justify-center items-center bg-blue-500 rounded p-2 mx-1`}
    >
      <Text style={tw`text-md`}>{label}</Text>
    </Pressable>
  </Link>
);

export default LinkButton;
