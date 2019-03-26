// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        layAlert: {
            default: null,
            type: cc.Prefab
        },
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
        var host = HOST_TEST + API_LOGIN;
        var reqData = {
            "username": this.username.string,
            "password": this.password.string
        };
        http.post(host, reqData, function (res) {
            if (res.error == Code.SUCCESS) {
                AlertOK(this, res.data);
                cc.director.loadScene('home')
            } else {
                AlertErr(this, res.data)
            }
        }.bind(this));
    },
    getTopTip() {
        var host = HOST_TEST + GET_APPSN;
        http.post(host, null, function (res) {
            console.log(res);
            if (res.error == Code.SUCCESS) {
                this.topTip.string="AppSN:"+res.data
            } else {
                AlertErr(dom, res.data)
            }
        }.bind(this));
    },
    start() {

    },
    // update (dt) {},
});
