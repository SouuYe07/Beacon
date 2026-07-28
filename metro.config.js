const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

const { assetExts, sourceExts } = config.resolver;

config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer/expo"),
};

config.resolver = {
  ...config.resolver,
  assetExts: assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...sourceExts, "svg"],
  // Avoid broken resolution of package-internal `.js` imports on Windows
  unstable_enablePackageExports: false,
};

const withCss = withNativeWind(config, { input: "./global.css" });

// native-stack imports `./FontProcessor.js` with an explicit extension.
// With package exports off, Metro skips `.native.js` and loads the web stub.
const upstreamResolveRequest = withCss.resolver.resolveRequest;
withCss.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    platform !== "web" &&
    typeof moduleName === "string" &&
    moduleName.replace(/\\/g, "/").endsWith("/FontProcessor.js")
  ) {
    const nativeModule = moduleName.replace(
      /FontProcessor\.js$/,
      "FontProcessor.native.js"
    );
    return context.resolveRequest(context, nativeModule, platform);
  }

  if (typeof upstreamResolveRequest === "function") {
    return upstreamResolveRequest(context, moduleName, platform);
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withCss;
