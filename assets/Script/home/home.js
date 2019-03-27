// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        topAppsn: {
            default: null,
            type: cc.Label
        },
        topRole: {
            default: null,
            type: cc.Label
        },
        topAdminName: {
            default: null,
            type: cc.Label
        },
        midModuleLabel: {
            default: [],
            type: [cc.Label, cc.Label, cc.Label, cc.Label]
        },
        score:{
            default: [],
            type:[cc.Label,cc.Label]
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (!cc.sys.localStorage.getItem(TokenAuth)) {
            console.log(123123)
            cc.director.loadScene('login');
            return;
        }
        this.initData();
    },
    initData() {
        var host = HOST_TEST + API_HOME;
        http.post(host, null, true, function (res) {
            if (res.error == Code.SUCCESS) {
                this.topAppsn.string="appSn\n"+res.data.app_sn
                this.topAdminName.string=res.data.login_name
                this.topRole.string=this.roleType(res.data.role)
                this.midModuleLabel[0].string="￥"+res.data.today_income
                this.midModuleLabel[1].string="￥"+res.data.today_fans
                this.midModuleLabel[2].string="￥"+res.data.month_income
                this.midModuleLabel[3].string="￥"+res.data.month_fans
                this.score[0].string=res.data.start_albums
                this.score[1].string=res.data.tip_off_nums
            } else {
                AlertErr(this, res.data);
            }
        }.bind(this));
    },
    roleType(type) {
        switch (type) {
            case 1:
                return "超级管理员";
            case 2:
                return "管理员";
            case 3:
                return "运营";
        }
    },
    exit() {
        cc.sys.localStorage.removeItem(TokenAuth);
        cc.director.loadScene('login');
    },
    start() {

    },

    // update (dt) {},
});
