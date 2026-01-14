import React from "react";
import { Image, View } from "react-native";
import { originImages } from "./assets";

const mapSource = (src?: string) => {
  if (!src) return originImages.test;
  if (src.includes("logo")) return originImages.logo;
  if (src.includes("nothing")) return originImages.nothing;
  if (src.includes("mining")) return originImages.mining;
  if (src.includes("x.png")) return originImages.x;
  if (src.includes("tg.png")) return originImages.tg;
  return originImages.test;
};

export default function MyAvatar({
  src,
  className,
}: {
  src?: string;
  className?: string;
}) {
  return (
    <View className={className ?? "w-10 h-10 rounded-full overflow-hidden"}>
      <Image
        source={mapSource(src)}
        className="w-full h-full"
        resizeMode="cover"
      />
    </View>
  );
}
