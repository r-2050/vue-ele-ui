<template>
  <div>
    <h3>当前书的id为:{{$route.params.id}}</h3>
    <div>
      <h3>{{booksDetail.title}}</h3>
      <img>
      <p v-html="booksDetail.content"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      booksDetail: []
    }
  },
  methods: {
    getData() {
      var url='http://penkuoer.com/api/v1/book/get_book_detail.json'
      this.$http.get(url,{params:{id:this.$route.params.id}})
      .then(res=>{
        console.log(res)
        this.booksDetail=res.data.data
      })
    }
  },
  created() {
    // console.log(this.$router)
    // console.log(this.$route)
    this.getData()
  }
}
</script>

