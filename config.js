// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我最可爱哒朋友哈哈",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "最可爱的小肥仔",  // 同上...
        "今天是你的生日啦",
        "祝你生日快乐",
        "今年没机会当面",
        "祝贺肥仔啦（难过 ′⌒`）嘻嘻",
        "祝这个女生越来越可爱漂亮",
        "祝小肥仔越来越优秀",
        "希望小肥仔今年",
        "不再会倒霉了哈哈",
        "不再会遇到难过不开心的事",
        "祝小肥仔的世界充满微笑",
        "祝小肥仔遇见的每个人都很温柔",
        "希望小肥仔以后不再难过哭泣",
        "永远相信小肥仔是最棒哒",
        "期待更棒的小肥仔",
        "最后祝肥仔生活的每一天都是开开心心的",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "送给我最可爱哒朋友哈哈": "./imgs/3.jpg",
        "最可爱的小肥仔": "./imgs/7.jpg", 
        "今天是你的生日啦": "./imgs/9.jpg",
        "祝这个女生越来越可爱漂亮": "./imgs/1.jpg",
        "永远相信小肥仔是最棒哒": "./imgs/12.jpg",
        "祝小肥仔的世界充满微笑": "./imgs/11.jpg",
        "期待更棒的小肥仔": "./imgs/13.jpg",
        "最后祝肥仔生活的每一天都是开开心心的": "./imgs/10.jpg",
        "今天是你的生日": "./imgs/birthday.jpg",
        
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "小肥仔点这开始哟",
        play: "音乐",
        bannar_coming: "装饰",
        balloons_flying: "好像少点东西耶",
        cake_fadein: "蛋糕",
        light_candle: "蜡烛",
        wish_message: "生日快乐",
        story: "一份祝福送给小肥仔^_^",
    }
};
