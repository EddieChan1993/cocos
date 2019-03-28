var api = require("common/api");
var http = require("common/http");
var homeMid = require("middle/home_base");

cc.Class({
    extends: homeMid,

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
        score: {
            default: [],
            type: [cc.Label, cc.Label]
        }
    },
    onLoad() {
        this.initData();
    },
    initData() {
        var host = api.reqApiAll(api.home);
        http.post(host, null, true, function (res) {
            if (res.error == http.SUCCESS) {
                this.topAppsn.string = "appSn\n" + res.data.app_sn
                this.topAdminName.string = res.data.login_name
                this.topRole.string = this.roleType(res.data.role)
                this.midModuleLabel[0].string = "￥" + res.data.today_income
                this.midModuleLabel[1].string = res.data.today_fans
                this.midModuleLabel[2].string = "￥" + res.data.month_income
                this.midModuleLabel[3].string = res.data.month_fans
                this.score[0].string = res.data.start_albums
                this.score[1].string = res.data.tip_off_nums
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
        cc.sys.localStorage.removeItem(http.tokenAuth);
        cc.director.loadScene('login');
    },
    start() {

    },

    // update (dt) {},
});
