var base = require("com/base");

cc.Class({
    extends: base,
    ctor() {
        //构造函数
        var token = cc.sys.localStorage.getItem(this.http.tokenAuth);
        if (token) {
            cc.director.loadScene('home');
        }
    }
});