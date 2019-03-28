var http = require("common/http");
var base = require("common/base");

cc.Class({
    extends: base,
    ctor() {
        //构造函数
        var token = cc.sys.localStorage.getItem(http.tokenAuth);
        if (token) {
            cc.director.loadScene('home');
        }
    }
});