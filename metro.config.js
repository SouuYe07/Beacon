const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

// 1. Fetch the default Expo Metro configuration
const config = getDefaultConfig(__dirname);

// 2. Extract resolver properties from the default config
const { resolver: { sourceExts, assetExts } } = config;

// 3. Configure the SVG transformer layers
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");

// 4. Intercept .svg files so they are treated as source code instead of asset binaries
config.resolver.assetExts = assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts = [...sourceExts, "svg"];

// 5. Wrap the modified configuration with NativeWind
module.exports = withNativeWind(config, { input: './global.css' });
