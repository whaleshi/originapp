import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

export type IconProps = {
  className?: string;
};

const IconWrapper = ({
  xml,
  className,
  defaultClassName,
}: {
  xml: string;
  className?: string;
  defaultClassName: string;
}) => {
  return (
    <View className={className ?? defaultClassName}>
      <SvgXml xml={xml} width="100%" height="100%" />
    </View>
  );
};

const simpleCircle = (size: number, color: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="${color}"/></svg>`;

export const MenuIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6H21M21 12H3M3 18H21" stroke="white" stroke-width="1.5"/></svg>`}
    defaultClassName="w-6 h-6"
    {...props}
  />
);

export const LogoIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="#FFB218"/><rect x="6" y="6" width="12" height="12" rx="3" fill="#FFD468"/></svg>`}
    defaultClassName="w-6 h-6"
    {...props}
  />
);

export const TextIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none"><rect x="0" y="2" width="64" height="12" rx="6" fill="#FFD468"/><rect x="4" y="5" width="28" height="6" rx="3" fill="#FFB218"/><rect x="36" y="5" width="24" height="6" rx="3" fill="#FFB218"/></svg>`}
    defaultClassName="w-16 h-4"
    {...props}
  />
);

export const SearchIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.9" stroke="#868789" stroke-width="1.5"/><path d="M14 14L11.5 11.5" stroke="#868789" stroke-width="1.5" stroke-linecap="round"/></svg>`}
    defaultClassName="w-4 h-4"
    {...props}
  />
);

export const ItemIcon = (props: IconProps) => (
  <IconWrapper
    xml={simpleCircle(16, "#FD7438")}
    defaultClassName="w-4 h-4"
    {...props}
  />
);

export const BackIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 6L8 12L14 18" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    defaultClassName="w-6 h-6"
    {...props}
  />
);

export const ShareIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M19 12V19H5V5H12" stroke="white" stroke-width="1.5"/><path d="M19 5L12 12" stroke="white" stroke-width="1.5"/><path d="M19 9V5H15" stroke="white" stroke-width="1.5"/></svg>`}
    defaultClassName="w-6 h-6"
    {...props}
  />
);

export const BNBIcon = (props: IconProps) => (
  <IconWrapper
    xml={simpleCircle(24, "#FFB218")}
    defaultClassName="w-6 h-6"
    {...props}
  />
);

export const XIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" fill="none"><rect width="40" height="24" rx="12" fill="#191B1F"/><path d="M13 7L27 17" stroke="white" stroke-width="1.6"/><path d="M27 7L13 17" stroke="white" stroke-width="1.6"/></svg>`}
    defaultClassName="w-10 h-6"
    {...props}
  />
);

export const TgIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" fill="none"><rect width="40" height="24" rx="12" fill="#191B1F"/><path d="M12 12L27 7L22 17L19 14L16 16L17 12" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    defaultClassName="w-10 h-6"
    {...props}
  />
);

export const WebIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="24" viewBox="0 0 40 24" fill="none"><rect width="40" height="24" rx="12" fill="#191B1F"/><circle cx="20" cy="12" r="6" stroke="white" stroke-width="1.5"/><path d="M14 12H26" stroke="white" stroke-width="1.5"/></svg>`}
    defaultClassName="w-10 h-6"
    {...props}
  />
);

export const CopyIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="3" y="3" width="7" height="7" rx="2" stroke="#868789" stroke-width="1.2"/><rect x="1" y="1" width="7" height="7" rx="2" stroke="#868789" stroke-width="1.2"/></svg>`}
    defaultClassName="w-3 h-3"
    {...props}
  />
);

export const FooterIcon1 = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="4" fill="white"/></svg>`}
    defaultClassName="w-5 h-5"
    {...props}
  />
);

export const FooterIcon2 = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3L18 17H2L10 3Z" fill="#606164"/></svg>`}
    defaultClassName="w-5 h-5"
    {...props}
  />
);

export const SwapIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#191B1F"/><path d="M12 16H28L24 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M28 24H12L16 28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    defaultClassName="w-10 h-10"
    {...props}
  />
);

export const BottomTokenIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="8" fill="#303135"/><path d="M8 12L14 18L20 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    defaultClassName="w-7 h-7"
    {...props}
  />
);

export const SettingIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4H12M2 10H12" stroke="#868789" stroke-width="1.5" stroke-linecap="round"/></svg>`}
    defaultClassName="w-3.5 h-3.5"
    {...props}
  />
);

export const CloseIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="#4A4B4E" stroke-width="2" stroke-linecap="round"/></svg>`}
    defaultClassName="w-6 h-6"
    {...props}
  />
);

export const ZuanIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L15 8L8 15L1 8L8 1Z" fill="#F4DC27"/></svg>`}
    defaultClassName="w-4 h-4"
    {...props}
  />
);

export const ZuanRightIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2L8 6L4 10" stroke="#EFB000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    defaultClassName="w-3 h-3"
    {...props}
  />
);

export const SelectDownIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5L7 9L11 5" stroke="#868789" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    defaultClassName="w-3.5 h-3.5"
    {...props}
  />
);

export const AddIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4V16M4 10H16" stroke="#FD7438" stroke-width="2" stroke-linecap="round"/></svg>`}
    defaultClassName="w-5 h-5"
    {...props}
  />
);

export const SearchInputIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.9" stroke="#868789" stroke-width="1.5"/><path d="M14 14L11.5 11.5" stroke="#868789" stroke-width="1.5" stroke-linecap="round"/></svg>`}
    defaultClassName="w-4 h-4"
    {...props}
  />
);

export const LogoutIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 4H4V16H8" stroke="#36383B" stroke-width="1.6" stroke-linecap="round"/><path d="M12 7L16 10L12 13" stroke="#36383B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 10H8" stroke="#36383B" stroke-width="1.6" stroke-linecap="round"/></svg>`}
    defaultClassName="w-5 h-5"
    {...props}
  />
);

export const WalletIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none"><rect x="1" y="2" width="12" height="9" rx="2" stroke="currentColor" stroke-width="1.3"/><circle cx="10.5" cy="6.5" r="1.2" fill="currentColor"/></svg>`}
    defaultClassName="w-3.5 h-3.5"
    {...props}
  />
);

export const LangIcon = ({ lang, ...props }: IconProps & { lang: "zh" | "en" }) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#868789" stroke-width="2"/><text x="16" y="20" text-anchor="middle" font-size="12" fill="white" font-family="Arial">${lang === "zh" ? "中" : "EN"}</text></svg>`}
    defaultClassName="w-8 h-8"
    {...props}
  />
);

export const HeaderXIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#191B1F"/><path d="M12 12L24 24" stroke="white" stroke-width="2"/><path d="M24 12L12 24" stroke="white" stroke-width="2"/></svg>`}
    defaultClassName="w-9 h-9"
    {...props}
  />
);

export const HeaderTgIcon = (props: IconProps) => (
  <IconWrapper
    xml={`<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#191B1F"/><path d="M12 18L26 12L22 26L18 22L15 24L16 18" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`}
    defaultClassName="w-9 h-9"
    {...props}
  />
);
