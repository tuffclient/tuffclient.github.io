(function () {
    var servers = [
        { addr: "wss://pcsmp.net, name: "§aPixel &bCraft" },
        { addr: "wss://pcsmp.net", name: "§cJoin Now!" }
    ];

    var real = Object.defineProperty;
    Object.defineProperty = function (obj, prop, desc) {
        if (obj === window && prop === "eaglercraftXOpts") {
            var get = desc.get, set = desc.set;
            if (get && set) {
                desc.set = function (v) {
                    set.call(this, v);
                    var opts = get.call(this);
                    if (opts) opts.servers = servers;
                };
            }
            Object.defineProperty = real;
        }
        return real.call(this, obj, prop, desc);
    };
})();
