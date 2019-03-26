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
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.node.on('click', this.callback, this)
    },
    callback: function (button) {
        console.log(HOST_TEST + API_LOGIN);
        var host = HOST_TEST + API_LOGIN;
        var reqData = {
            "username": this.username.string,
            "password": this.password.string
        };
        var dom = this;
        http.post(host, reqData, function (res) {
            if (res.error == Code.SUCCESS) {
                AlertOK(dom, res.data);
                cc.director.loadScene('home')
            } else {
                AlertErr(dom, res.data)
            }
        });
    },
    start() {

    },
    // update (dt) {},
});
