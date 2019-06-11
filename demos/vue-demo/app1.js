var journal = new Vue({
  el: '#journal',
  data: {
    message: 'Your first entry'
  }
});

var myvue = new Vue({
  // 节点
  el : '#myvue',
  data :{
    msg : 'msg'
  }
});


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el:'#app3',
  data : {
    seen: true
  }
});


var fore = new Vue({
  el:'#fore',
  data :{
    items:[
      {text:'学习Javascript'},
      {text:'学习TypeScript'},
      {text:'学习PhpScript'},
      {text:'学习PythonScript'}
    ]
  }
});

var app5 = new Vue({
  el : '#app5',
  data: {
    msgss : "this is my word!"
  },
  methods :{
    clickMessage : function() {
      // this.msgss = "this is my word!";
      this.msgss = this.msgss.split('').join('-');
    }
  }
});


var  app6 = new Vue({
  el :'#app6',
  data :{
    app6message : 'this is my word!'
  }
});

var obj={
  poo : 'asdsdsad',
  url :'https://baidu.com',
  firstname:'Devi',
  lastName:'Bar'
}


// 阻止修改现有的属性，也意味着响应系统无法再追踪变化
// Object.freeze(obj)


var freeze= new Vue({
  el :'#freeze',
  data:obj,
  computed:{
    fullname :{
      get :function(){
        return this.firstname+ ' '+this.lastName
      },
      set:function (vals) {
        var names = vals.split(' ');
        this.firstname = names[0];
        this.lastName = names[1];
      }
    } 
  }
});

let arrqusetion = ["你是问题都问了啥？","问题都问了啥？"];
let arranswers = ["是的，你的是个好问题","是的，我也有这个疑问"];
var goodforperson = new Vue({
  el :'#goodforperson',
  data:{
    // 开始问题和答案为空
    question : '',
    answer:'',
    imgsrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560825260&di=20adb5d7dd8722406156a5f9d9322665&imgtype=jpg&er=1&src=http%3A%2F%2Fimg2018.cnblogs.com%2Fblog%2F1349812%2F201905%2F1349812-20190522151547047-1608803947.png'
  },
  watch :{
    // 监听question，如果question发生改变，这个函数会执行
    question :function () {
      this.answer = '你正在输入.....'
      this.bebouncedGetAnswer()
    }
  },
  created:function () {
    this.bebouncedGetAnswer = _.debounce(this.getAnswer,500)
  },
  methods: {
    getAnswer: function () {
      // 如果问题没有以？号结束，提示格式不对
      if(this.question.indexOf('?') === -1){
        this.answer = '问题通常包含一个问号。:-)'
        return
      }
      this.answer = '思考中....'
      var vm =this
      // 调接口
      axios.get('https://yesno.wtf/api')
      // 正确处理
      .then(function(response){
          let yesno = _.capitalize(response.data.answer)
          if(yesno == 'Yes' || yesno == 'yes'){
            let i =Math.floor((Math.random()*(arranswers.length)))
            vm.answer=arranswers[i]
            vm.imgsrc =response.data.image
          }else{
            let i =Math.floor((Math.random()*(arrqusetion.length)))
            vm.answer=arrqusetion[i];
            vm.imgsrc =response.data.image
          }
      })
      // 异常处理
      .catch(function(error){
          vm.answer = 'Error! 接口无法访问。'+error
      })
    }
  }
});

