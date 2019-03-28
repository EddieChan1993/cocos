var base = require("com/base");

cc.Class({
    extends: base,
    properties: {
        topBanner: {
            default: null,
            type: cc.Prefab
        },
        topRightImg:{
            default: null,
            type: cc.Texture2D
        }
    },
    ctor() {
        //构造函数
        var token = cc.sys.localStorage.getItem(this.http.tokenAuth);
        if (!token) {
            cc.director.loadScene('login');
        }
    },
    //初始化banner
    initTopBanner(title) {
        this.topBanner = cc.instantiate(this.topBanner);
        this.topBanner.getComponent("topBanner").setTitle(title);
        cc.log(this.topRightImg)
        this.topBanner.getComponent("topBanner").setRightImg(this.topRightImg);
        this.node.addChild(this.topBanner);
    },
});