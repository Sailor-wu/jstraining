
var app = new Vue({
    el:'#act',
    data:{
        isActive: true,
        awesome :true,
        type:'A',
        loginType :'username'
    },
    methods:{
        changetype:function(){
            if(this.loginType == 'username'){
                this.loginType = 'email'
            }else if(this.loginType == 'email'){
                this.loginType = 'username'
            }
        }
    }
});

var  listxr = new Vue({
    el : '#listxr',
    data:{
        persons:[
            {name:'why',age:23},
            {name:'dce',age:20},
            {name:'xxm',age:13}
        ]
    }
});

// 定义button
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
 

  Vue.component('base-checkbox', {
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: Boolean
    },
    template: `
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
    `
  })
 // 创建
 new Vue({ el: '#button-demo' })

  // 创建
//   new Vue({ el: '#button-demo' })



// Vue.component('blog-post', {
//     props: ['title'],
//     template: '<h3>{{ title }}</h3>'
// })
Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <h5>{{ post.createtime }}</h5>
        <div v-html="post.content"></div>
        <button v-on:click="$emit('enlarge-text')">
        Enlarge text
        </button>
      </div>
    `
  })
  new Vue({
    el:'#bolg',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue',content:'asdsadcontentcontentcontent' ,createtime:'2018-9-4'},
            { id: 2, title: 'Blogging with Vue' ,content:'asdsadcontentcontentcontent' ,createtime:'2018-9-4'},
            { id: 3, title: 'Why Vue is so fun' ,content:'asdsadcontentcontentcontent' ,createtime:'2018-9-4'}
        ]
    }
});
new Vue({
    el:'#bolg1',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue',content:'asdsadcontentcontentcontent' ,createtime:'2018-9-4'},
            { id: 2, title: 'Blogging with Vue' ,content:'asdsadcontentcontentcontent' ,createtime:'2018-9-4'},
            { id: 3, title: 'Why Vue is so fun' ,content:'asdsadcontentcontentcontent' ,createtime:'2018-9-4'}
        ],
        postFontSize: 1
    }
});
new Vue({
    el: '#demo',
    data: {
      show: true
    }
  })