var loginMid = require("middle/login_base");

cc.Class({
    extends: loginMid,

    properties: {
        username: {
            default: null,
            type: cc.EditBox
        },
        password: {
            default: null,
            type: cc.EditBox
        },
        topTip: {
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.getTopTip();
    },
    callback: function (button) {
        var host = this.api.reqApiAll(this.api.adminLogin);
        var reqData = {
            "username": this.username.string,
            "password": this.password.string
        };
        this.post(host, reqData, false, function (res) {
            if (res.error == this.http.SUCCESS) {
                this.alertOk( "用户身份正确");
                cc.sys.localStorage.setItem(this.http.tokenAuth, res.data)
                cc.director.loadScene('home')
            } else {
                this.alertErr(res.data);
            }
        }.bind(this));
    },
    getTopTip() {
        var host = this.api.reqApiAll(this.api.getAppSn);
        this.post(host, null, false, function (res) {
            if (res.error == this.http.SUCCESS) {
                this.topTip.string = "AppSN:" + res.data
            } else {
                this.alertErr(res.data)
            }
        }.bind(this));
    },
    start() {

    },
    // update (dt) {},
});
