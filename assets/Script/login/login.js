var api = require("common/api");
var http = require("common/http");
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
        var host = api.reqApiAll(api.adminLogin);
        var reqData = {
            "username": this.username.string,
            "password": this.password.string
        };
        http.post(host, reqData, false, function (res) {
            if (res.error == http.SUCCESS) {
                AlertOK(this, "用户身份正确");
                cc.sys.localStorage.setItem(http.tokenAuth, res.data)
                cc.director.loadScene('home')
            } else {
                this.aaa = this.alertErr(this, res.data);
            }
        }.bind(this));
    },
    getTopTip() {
        var host = api.reqApiAll(api.getAppSn);
        http.post(host, null, false, function (res) {
            if (res.error == http.SUCCESS) {
                this.topTip.string = "AppSN:" + res.data
            } else {
                this.alertErr(this, res.data)
            }
        }.bind(this));
    },
    start() {

    },
    // update (dt) {},
});
