import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from "react-native";

export type LayoutConfig = {
  showHeader?: boolean;
  showFooter?: boolean;
  headerTitle?: string;
  footerText?: string;
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

type AppLayoutProps = {
  children: React.ReactNode;
  config?: LayoutConfig;
};

export default function AppLayout({ children, config }: AppLayoutProps) {
  const {
    showHeader = false,
    showFooter = false,
    headerTitle = "Header",
    footerText = "Footer",
    renderHeader,
    renderFooter,
    containerStyle,
    contentStyle,
  } = config ?? {};

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {showHeader && (
        <View style={styles.header}>
          {renderHeader ? (
            renderHeader()
          ) : (
            <Text style={styles.headerText}>{headerTitle}</Text>
          )}
        </View>
      )}
      <View style={[styles.content, contentStyle]}>{children}</View>
      {showFooter && (
        <View style={styles.footer}>
          {renderFooter ? (
            renderFooter()
          ) : (
            <Text style={styles.footerText}>{footerText}</Text>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0,0,0,0.15)",
    backgroundColor: "#f7f7f7",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "rgba(0,0,0,0.15)",
    backgroundColor: "#f7f7f7",
  },
  footerText: {
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
  },
});
