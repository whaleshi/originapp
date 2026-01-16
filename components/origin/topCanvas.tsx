import React, { useState } from "react";
import { StyleSheet, View, type LayoutChangeEvent } from "react-native";
import { Canvas, Path, Rect, Skia, useClock, usePathValue } from "@shopify/react-native-skia";
import { useSharedValue } from "react-native-reanimated";
import { useAppTheme } from "@/components/theme/ThemeProvider";

const TopCanvas: React.FC = () => {
  const { colors, isDark } = useAppTheme();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const clock = useClock();
  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const particleColors = isDark
    ? [
        "rgba(0, 248, 241, 0.55)",
        "rgba(255, 189, 30, 0.55)",
        "rgba(254, 132, 143, 0.55)",
        "rgba(124, 255, 107, 0.5)",
      ]
    : [
        "rgba(0, 170, 165, 0.55)",
        "rgba(214, 140, 0, 0.55)",
        "rgba(214, 80, 94, 0.55)",
        "rgba(38, 166, 91, 0.55)",
      ];

  const createParticlesPath = (bucket: number) =>
    usePathValue((path) => {
      "worklet";
      const w = width.value;
      const h = height.value;
      if (w === 0 || h === 0) return;
      const t = clock.value / 1000;
      const count = 120;

      const frac = (x: number) => x - Math.floor(x);
      const rand = (n: number) => frac(Math.sin(n) * 43758.5453);

      for (let i = bucket; i < count; i += 4) {
        const xSeed = rand(i * 12.9898);
        const speed = 0.08 + rand(i * 78.233) * 0.18;
        const sizeSeed = 0.8 + rand(i * 39.425) * 3.2;
        const alpha = 0.25 + rand(i * 93.989) * 0.5;
        const offset = rand(i * 0.123);
        const progress = (t * speed + offset) % 1;
        const spread = 0.35 + progress * 0.65;
        const px = w * 0.5 + (xSeed - 0.5) * w * 0.7 * spread;
        const py = h * (1 - progress * 1.05);
        const sizeScale = 0.6 + alpha;
        path.addRect(Skia.XYWHRect(px, py, sizeSeed * sizeScale, sizeSeed * sizeScale));
      }
    });

  const particlesPathA = createParticlesPath(0);
  const particlesPathB = createParticlesPath(1);
  const particlesPathC = createParticlesPath(2);
  const particlesPathD = createParticlesPath(3);


  const onLayout = (event: LayoutChangeEvent) => {
    const { width: layoutWidth, height: layoutHeight } = event.nativeEvent.layout;
    if (layoutWidth === size.width && layoutHeight === size.height) return;
    setSize({ width: layoutWidth, height: layoutHeight });
    width.value = layoutWidth;
    height.value = layoutHeight;
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]} onLayout={onLayout}>
      {size.width > 0 && size.height > 0 ? (
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect x={0} y={0} width={size.width} height={size.height} color={colors.background} />
          <Path path={particlesPathA} color={particleColors[0]} />
          <Path path={particlesPathB} color={particleColors[1]} />
          <Path path={particlesPathC} color={particleColors[2]} />
          <Path path={particlesPathD} color={particleColors[3]} />
        </Canvas>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
});

export default TopCanvas;
