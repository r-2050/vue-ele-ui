<template>
  <div class="books">
    <ul>
      <!--v-bind:后是js代码  例如:key内部的是js代码  -->
      <h2>书籍列表</h2>

        <router-link :to="{name:'BooksDet',params:{id:book.id}}" v-for="book in books" :key="book.id">
           <li><<{{book.title}}>></li>
        </router-link>

    </ul>
  </div>
</template>
<script>
export default {
  // 自定义组件中的data必须是一个function
  data(){
    return{
      books:[
        {id:1,title:'水果1大侠'},
        {id:2,title:'水果2大侠'},
        {id:3,title:'水果3大侠'},
        {id:4,title:'水果4大侠'}
      ]
    }
  },
  methods:{
    getData(){
      var url='http://penkuoer.com/api/v1/book/get_books_by_page.json'
      this.$http.get(url,{params:{page:1}})
      .then(res=>{
        console.log(res.data)
        this.books=res.data.data
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  created(){
    this.getData()
  },
}
</script>
<style>

</style>
