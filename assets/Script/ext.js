window.AlertOK = function (thisNode, msg) {
    var alertNode = cc.instantiate(thisNode.layAlert);
    alertNode.getComponent("alert").alertMsgOK(msg);
    thisNode.node.addChild(alertNode);
};

window.AlertErr = function (thisNode, msg) {
    var alertNode = cc.instantiate(thisNode.layAlert);
    alertNode.getComponent("alert").alertMsgErr(msg);
    thisNode.node.addChild(alertNode);
};
