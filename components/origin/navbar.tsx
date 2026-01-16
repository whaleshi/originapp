import React, { useRef, useState } from "react";
import {
	Animated,
	Dimensions,
	Modal,
	Pressable,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CloseIcon, LogoIcon, MenuIcon, TextIcon } from "./icons";
import { useAppTheme } from "@/components/theme/ThemeProvider";
import { Button } from 'heroui-native';

export const Navbar = () => {
	const router = useRouter();
	const insets = useSafeAreaInsets();
	const [drawerVisible, setDrawerVisible] = useState(false);
	const [language, setLanguage] = useState("简体中文");
	const { theme, setTheme, colors, isDark } = useAppTheme();
	const drawerWidth = Math.min(320, Math.round(Dimensions.get("window").width * 0.82));
	const translateX = useRef(new Animated.Value(drawerWidth)).current;

	const openDrawer = () => {
		setDrawerVisible(true);
		translateX.setValue(drawerWidth);
		Animated.timing(translateX, {
			toValue: 0,
			duration: 220,
			useNativeDriver: true,
		}).start();
	};

	const closeDrawer = () => {
		Animated.timing(translateX, {
			toValue: drawerWidth,
			duration: 200,
			useNativeDriver: true,
		}).start(({ finished }) => {
			if (finished) {
				setDrawerVisible(false);
			}
		});
	};

	const overlayOpacity = translateX.interpolate({
		inputRange: [0, drawerWidth],
		outputRange: [0.5, 0],
		extrapolate: "clamp",
	});

	return (
		<View style={[styles.navRoot, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
			<View className="flex flex-row items-center h-[56px] px-[14px] gap-[8px]">
				<Pressable className="flex flex-row items-center gap-[6px]" onPress={() => router.push("/")}>
					<LogoIcon />
					<TextIcon color={colors.text} />
				</Pressable>
				<View className="flex-1" />
				<Pressable
					className="h-[32px] px-[12px] rounded-[8px] items-center justify-center"
					style={[
						styles.secondaryButton,
						{ borderColor: colors.buttonSecondaryBorder, backgroundColor: colors.buttonSecondaryBg },
					]}
					onPress={() => router.push("/create")}
				>
					<Text style={[styles.secondaryButtonText, { color: colors.buttonSecondaryText }]}>创建代币</Text>
				</Pressable>
				<Pressable
					className="h-[32px] px-[12px] rounded-[8px] items-center justify-center"
					style={{ backgroundColor: colors.buttonPrimaryBg }}
				>
					<Text style={[styles.primaryButtonText, { color: colors.buttonPrimaryText }]}>连接钱包</Text>
				</Pressable>
				<Pressable onPress={openDrawer} hitSlop={10}>
					<MenuIcon color={colors.text} />
				</Pressable>
			</View>
			<Modal
				visible={drawerVisible}
				transparent
				animationType="none"
				statusBarTranslucent
				onRequestClose={closeDrawer}
			>
				<View style={styles.modalRoot}>
					<Animated.View style={[StyleSheet.absoluteFillObject, { opacity: overlayOpacity }]}>
						<View style={[styles.overlay, { backgroundColor: colors.overlay }]} />
					</Animated.View>
					<Pressable style={StyleSheet.absoluteFillObject} onPress={closeDrawer} />
					<Animated.View
						style={[
							styles.drawer,
							{
								width: drawerWidth,
								paddingTop: insets.top + 12,
								paddingBottom: Math.max(insets.bottom, 16),
								backgroundColor: colors.surfaceAlt,
								borderLeftColor: colors.border,
								transform: [{ translateX }],
							},
						]}
					>
						<View style={[styles.drawerHeader, { borderBottomColor: colors.border }]}>
							<Text style={[styles.drawerTitle, { color: colors.text }]}>快捷菜单</Text>
							<Pressable onPress={closeDrawer} hitSlop={8}>
								<CloseIcon />
							</Pressable>
						</View>
						<View style={styles.section}>
							<Text style={[styles.sectionTitle, { color: colors.textMuted }]}>偏好</Text>
							<Pressable
								style={[styles.row, { borderBottomColor: colors.border }]}
								onPress={() =>
									setLanguage((prev) => (prev === "简体中文" ? "English" : "简体中文"))
								}
							>
								<Text style={[styles.rowLabel, { color: colors.text }]}>语言</Text>
								<Text style={[styles.rowValue, { color: colors.textSecondary }]}>{language}</Text>
							</Pressable>
							<Pressable
								style={[styles.row, { borderBottomColor: colors.border }]}
								onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								<Text style={[styles.rowLabel, { color: colors.text }]}>主题</Text>
								<Text style={[styles.rowValue, { color: colors.textSecondary }]}>
									{theme === "dark" ? "深色" : "浅色"}
								</Text>
							</Pressable>
						</View>
						<View style={styles.section}>
							<Text style={[styles.sectionTitle, { color: colors.textMuted }]}>社区</Text>
							<Pressable style={[styles.row, { borderBottomColor: colors.border }]} onPress={closeDrawer}>
								<Text style={[styles.rowLabel, { color: colors.text }]}>加入我们</Text>
								<Text style={[styles.rowValue, { color: colors.textSecondary }]}>合作/社区</Text>
							</Pressable>
							<Pressable style={[styles.row, { borderBottomColor: colors.border }]} onPress={closeDrawer}>
								<Text style={[styles.rowLabel, { color: colors.text }]}>帮助与反馈</Text>
								<Text style={[styles.rowValue, { color: colors.textSecondary }]}>联系我们</Text>
							</Pressable>
							<Button>
								<Button.Label>...</Button.Label>
							</Button>
						</View>
					</Animated.View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	navRoot: {
		width: "100%",
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	modalRoot: {
		flex: 1,
	},
	overlay: {
		flex: 1,
	},
	drawer: {
		position: "absolute",
		right: 0,
		top: 0,
		bottom: 0,
		borderLeftWidth: StyleSheet.hairlineWidth,
		paddingTop: 18,
		paddingHorizontal: 18,
	},
	drawerHeader: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingBottom: 12,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	secondaryButton: {
		borderWidth: 1,
	},
	drawerTitle: {
		fontSize: 16,
		color: "#FFFFFF",
		fontWeight: "600",
	},
	section: {
		marginTop: 18,
	},
	sectionTitle: {
		fontSize: 12,
		marginBottom: 10,
		textTransform: "uppercase",
		letterSpacing: 1,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 12,
		borderBottomWidth: StyleSheet.hairlineWidth,
		height: 44,
	},
	rowLabel: {
		fontSize: 14,
	},
	rowValue: {
		fontSize: 13,
	},
	primaryButtonText: {
		fontSize: 13,
	},
	secondaryButtonText: {
		fontSize: 13,
	},
});
