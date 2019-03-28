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
        titleNode: {
            default: null,
            type: cc.Label
        },
        topRightImg: {
            default: null,
            type: cc.Sprite
        }
    },
    goHome() {
        //返回首页
        cc.director.loadScene('home')
    },
    setTitle(title) {
        //设置标题
        this.titleNode.string = title
    },
    setRightImg(Img) {
        //设置图片
        cc.log(Img)
        cc.loader.loadRes()
        this.topRightImg.SpriteFrame.setTexture(Img)
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
