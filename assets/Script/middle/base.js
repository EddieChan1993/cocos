cc.Class({
    extends: cc.Component,
    properties: {
        layAlert: {
            default: null,
            type: cc.Prefab
        },
    },
    alertOk(thisNode,msg) {
        if (this.alertNode) {
            this.alertNode.destroy();
        }
        this.alertNode = cc.instantiate(thisNode.layAlert);
        this.alertNode.getComponent("alert").alertMsgOK(msg);
        thisNode.node.addChild(this.alertNode);
        this.alertNode.scheduleOnce(function () {
            this.alertNode.destroy();
        },3)
    },
    alertErr(thisNode, msg) {
        if (this.alertNode) {
            this.alertNode.destroy();
        }
        this.alertNode = cc.instantiate(thisNode.layAlert);
        this.alertNode.getComponent("alert").alertMsgErr(msg);
        thisNode.node.addChild(this.alertNode);
        this.alertNode.scheduleOnce(function () {
            this.alertNode.destroy();
        },3)
    }
});