var http = require("com/http");
var api = require("com/api");

cc.Class({
    extends: cc.Component,
    properties: {
        layAlert: {
            default: null,
            type: cc.Prefab
        },
    },
    ctor() {
        //构造函数
        this.api = api;
        this.http = http;
    },
    alertOk(msg) {
        if (this.alertNode) {
            this.alertNode.destroy();
            this.unschedule(this.callDestroy)
        }
        this.alertNode = cc.instantiate(this.layAlert);
        this.alertNode.getComponent("alert").alertMsgOK(msg);
        this.node.addChild(this.alertNode);
        this.callDestroy = function () {
            this.alertNode.destroy();
        };
        this.scheduleOnce(this.callDestroy, 3)
    },
    alertErr(msg) {
        if (this.alertNode) {
            this.alertNode.destroy();
            this.unschedule(this.callDestroy)//解除定时器
        }
        this.alertNode = cc.instantiate(this.layAlert);
        this.alertNode.getComponent("alert").alertMsgErr(msg);
        this.node.addChild(this.alertNode);
        this.callDestroy = function () {
            this.alertNode.destroy();
        };
        this.scheduleOnce(this.callDestroy, 3)
    },
    alertLoding() {
        if (this.alertNode) {
            this.alertNode.destroy();
            this.unschedule(this.callDestroy)//解除定时器
        }
        this.alertNode = cc.instantiate(this.layAlert);
        this.alertNode.getComponent("alert").alertMsgLoding();
        this.node.addChild(this.alertNode);
        this.callDestroy = function () {
            this.alertNode.destroy();
        };
        this.scheduleOnce(this.callDestroy,0.5)
    },
    post: function (url, reqData, isAuth, callback) {
        var xhr = new XMLHttpRequest();
        var self = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var response = xhr.responseText;
                if (response) {
                    var responseJson = JSON.parse(response);
                    if (responseJson.code == self.http.httpAuthError) {
                        cc.director.loadScene('login');
                    } else {
                        callback(responseJson);
                    }
                }
            } else {
                self.alertLoding()
            }
        };

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        cc.log(isAuth);
        if (isAuth) {
            var token = cc.sys.localStorage.getItem(this.http.tokenAuth);
            xhr.setRequestHeader(this.http.tokenAuthHeader, token);
        }
        xhr.send(JSON.stringify(reqData));
    }
});