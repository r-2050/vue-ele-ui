import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Books from '@/components/BooksList'
import BooksDetail from '@/components/BooksDetail'

Vue.use(Router)
// 在vue中自定义组件就是一个对象
// template  表示
// data  表示组建的数据
// created() 组件创建的时候触发
const GoodsView = {
  template: '<h5>产品雷彪{{name}}</h5>',
  data() {
    return {
      name: '',
    }
  },
  created() {
    // console.log(this.$route)
    this.name = this.$route.params.name
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      //此处的 :name 表示一个参数（在组件的路由中通过params.name获取），
      // 如果在参数的后面加上一个可选的 标记? 表示可以不选
      path: '/p_list/:name/:age?',
      name: 'Goods',
      component: GoodsView //设置路由对应的组件
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
     {
      path: '/books_detail/:id/:age?',
      name: 'BooksDet',
      component: BooksDetail
    },
  ]
})
