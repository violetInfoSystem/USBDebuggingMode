import Foundation

@objc public class DebuggingMode: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
