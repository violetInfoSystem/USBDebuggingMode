// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Debuggingmode",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "Debuggingmode",
            targets: ["DebuggingModePlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "DebuggingModePlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/DebuggingModePlugin"),
        .testTarget(
            name: "DebuggingModePluginTests",
            dependencies: ["DebuggingModePlugin"],
            path: "ios/Tests/DebuggingModePluginTests")
    ]
)