cc.Class({
    extends: cc.Component,

    properties: {
        labelDom: {
            default: null,
            type: cc.Label
        },
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad() {
    // },
    alertMsgOK(msg) {
        this.labelDom.string = msg;
    },
    alertMsgErr(msg) {
        this.node.color = cc.color(243, 12, 0, 210);
        this.labelDom.string = msg;
    },
    alertMsgLoding(msg) {
        this.node.color = cc.color(14, 12, 0, 210);
        this.labelDom.string = "请求中...";
    },
    start() {

    },

    // update (dt) {},
});
