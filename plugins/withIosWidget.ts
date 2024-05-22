import {
  ConfigPlugin,
  withDangerousMod,
  IOSConfig,
} from "@expo/config-plugins";
import path from "path";
import fs from "fs";
import { globSync } from "glob";
import {
  PBXGroup,
  XcodeProject,
  PBXBuildFile,
  PBXFileReference,
  PBXSourcesBuildPhase,
  PBXFrameworksBuildPhase,
  PBXResourcesBuildPhase,
  PBXContainerItemProxy,
  PBXTargetDependency,
  PBXCopyFilesBuildPhase,
} from "@bacons/xcode";
import * as xcodeParse from "@bacons/xcode/json";
// import {
//   addFrameworksToDisplayFolder,
//   createConfigurationList,
//   getOrCreateBuildFile,
//   getFramework,
//   applyDevelopmentTeamIdToTargets,
// } from "./apple-utils";

const withIosWidget: ConfigPlugin = (config) => {
  return withDangerousMod(config, [
    "ios",
    (dangerousConfig) => {
      console.log("iOS widget!");
      // constants
      const widgetFolderName = "HelloWidget";
      const widgetBundleId =
        dangerousConfig.ios!.bundleIdentifier! + "." + "HelloWidget";
      const widgetExtensionFrameworks = ["WidgetKit", "SwiftUI"];
      const developmentTeamId = undefined;

      // absolute directories we need when reading files from disk
      const projectRoot = dangerousConfig.modRequest.projectRoot;
      const widgetRoot = path.join(projectRoot, "widgets/ios/");

      // relative directories referenced by Xcode (relative to ios folder)
      const widgetFolderRelativeToIosProject = "../widgets/ios/";
      return dangerousConfig; // Return the modified config
    },
  ]);
};

export default withIosWidget;
