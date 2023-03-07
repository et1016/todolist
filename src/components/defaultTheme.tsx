import { extendTheme } from "@chakra-ui/react";

// 夜色模式設定
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const defaultTheme = extendTheme({ config });

export default defaultTheme;
