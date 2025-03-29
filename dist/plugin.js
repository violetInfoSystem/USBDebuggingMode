var capacitorDebuggingMode = (function (exports, core) {
    'use strict';

    const DebuggingMode = core.registerPlugin('DebuggingMode', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DebuggingModeWeb()),
    });

    class DebuggingModeWeb extends core.WebPlugin {
        async DebuggingEnabled() {
            return {
                usbDebuggingEnabled: false,
                wirelessAdbEnabled: false
            };
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DebuggingModeWeb: DebuggingModeWeb
    });

    exports.DebuggingMode = DebuggingMode;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
