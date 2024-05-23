import "ts-node/register";
import { ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";

module.exports = ({ config }: { config: ExpoConfig }) => {
  return {
    expo: {
      name: IS_DEV ? "Art Museum (Dev)" : "Art Museum",
      slug: "appjs24-workflows-workshop-code",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/images/icon.png",
      scheme: "myapp",
      userInterfaceStyle: "automatic",
      splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      assetBundlePatterns: ["**/*"],
      ios: {
        supportsTablet: true,
        bundleIdentifier: "com.expo.appjs24-workflows-workshop-code",
        entitlements: {
          "com.apple.security.application-groups": [
            "group.appjs24-workflows-workshop-code",
          ],
        },
      },
      android: {
        adaptiveIcon: {
          foregroundImage: "./assets/images/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
        package: "com.expo.appjs24workflowsworkshopcode",
      },
      web: {
        bundler: "metro",
        favicon: "./assets/images/favicon.png",
      },
      plugins: [
        ["expo-router"],
        "react-native-image-marker",
        [
          "expo-quick-actions",
          {
            androidIcons: {
              fav_icon: {
                foregroundImage: "./assets/images/adaptive-icon-fav.png",
                backgroundColor: "#29cfc1",
              },
            },
            iosIcons: {
              fav_icon: "./assets/images/fav.png",
            },
          },
        ],
        ["./plugins/withWidget.ts"],
      ],
      experiments: {
        typedRoutes: true,
      },
      runtimeVersion: {
        policy: "appVersion",
      },
      extra: {
        router: {
          origin: false,
        },
        eas: {
          projectId: "5dcfc274-8d24-4778-b70d-99b32fd00316",
        },
      },
      owner: "spencernicholas",
      updates: {
        url: "https://u.expo.dev/5dcfc274-8d24-4778-b70d-99b32fd00316",
      },
    },
  };
};
