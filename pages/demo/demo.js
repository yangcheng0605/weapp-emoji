
Page({
  data: {
    isShow: false,//控制emoji表情是否显示
    isLoad: true,//解决初试加载时emoji动画执行一次
    content: "",//评论框的内容
    isLoading: true,//是否显示加载数据提示
    disabled: true,
    cfBg: false,
    _index: 0,
    comments:'',
    emojiChar: "☺-😋-😌-😍-😏-😜-😝-😞-😔-😪-😭-😁-😂-😃-😅-😆-👿-😒-😓-😔-😏-😖-😘-😚-😒-😡-😢-😣-😤-😢-😨-😳-😵-😷-😸-😻-😼-😽-😾-😿-🙊-🙋-🙏-✈-🚇-🚃-🚌-🍄-🍅-🍆-🍇-🍈-🍉-🍑-🍒-🍓-🐔-🐶-🐷-👦-👧-👱-👩-👰-👨-👲-👳-💃-💄-💅-💆-💇-🌹-💑-💓-💘-🚲",
    //0x1f---
    emoji: [
      "01", "02", "03", "04", "05", "06", "07", "08", "09","10", 
      "11", "12", "13", "14", "15", "16", "17", "18", "19","20", 
      "21", "22", "23", "24", "25", "26", "27", "28", "29","30", 
      "31", "32", "33", "34", "35", "36", "37", "38", "39","40", 
      "41", "42", "43", "44", "45", "46", "47", "48", "49","50", 
      "51", "52", "53", "54", "55",
    ],
    emojis: [],//qq、微信原始表情
    alipayEmoji: [],//支付宝表情
  },
 
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var em = {}, that = this, emChar = that.data.emojiChar.split("-");
    var emojis = []
    that.data.emoji.forEach(function (v, i) {
      em = {
        char: emChar[i],
        emoji: v
      };
      emojis.push(em)
    });
       that.setData({
        emojis: emojis
      })
  },
  onReady: function () {
    // 页面渲染完成
  },
 
  //解决滑动穿透问题
  emojiScroll: function (e) {
    console.log(e)
  },
  //文本域失去焦点时 事件处理
  textAreaBlur: function (e) {
    //获取此时文本域值
    console.log(e.detail.value)
    this.setData({
      content: e.detail.value
    })

  },
  //文本域获得焦点事件处理
  textAreaFocus: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  textAreaInput: function (e){
    this.setData({
      content: e.detail.value
    })
  },
  //点击表情显示隐藏表情盒子
  emojiShowHide: function () {
    this.setData({
      isShow: !this.data.isShow,
      isLoad: false,
      cfBg: !this.data.false
    })
  },
  //表情选择
  emojiChoose: function (e) {
    //当前输入内容和表情合并
    this.setData({
      content: this.data.content + e.currentTarget.dataset.emoji
    })
  },
  //点击emoji背景遮罩隐藏emoji盒子
  cemojiCfBg: function () {
    this.setData({
      isShow: false,
      cfBg: false
    })
  },
  //发送评论评论 事件处理
  send: function () {
    var that = this, conArr = [];
    //此处延迟的原因是 在点发送时 先执行失去文本焦点 再执行的send 事件 此时获取数据不正确 故手动延迟100毫秒
    setTimeout(function () {
      console.log(that.data.content)
    }, 100)
  }
})