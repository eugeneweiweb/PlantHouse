<template>
  <div class="mall">
    <div class="left">
      <ul class="sidebar">
        <router-link
          v-for="item in categories"
          tag="li"
          :key="item.id"
          :to="{
              name: 'categories',
              params: {
                categoriesId: item.id
              }
            }"
        >{{item.title}}</router-link>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mall',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.getCategories()
        .then(resp => {
          vm.categories = resp
          vm.$nextTick()
            .then(() => {
              // 如果是父级跳转过来的就不会有categoriesId，则跳转到第一个分类，
              // 如果之前是子页面就有对应的categoriesId，则会跳到之前页面
              const categoriesId = to.params.categoriesId || resp[0].id
              vm.$router.push({
                name: 'categories',
                params: {
                  categoriesId
                }
              })
            })
        })
    })
  },
  data () {
    return {
      categories: []
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .mall{
    display: flex;
    border-top: 2px solid #ccc;
    height: 100%;
    overflow: hidden;
    >.left{
      width: 25%;
      background-color: #ddd;
      overflow-x: hidden;
      ul{
        li{
          height: 10vw;
          line-height: 10vw;
          text-align: center;
          font-size: 12px;
          border-left: 1vw solid #ddd;
          transition: border-left-color 0.6s ease;

          &.router-link-exact-active{
            border-left-color: pink;
            background-color: white;
            transition: border-left-color 0.6s ease;
          }
        }
      }
    }
    >.right{
      flex: 1;
      overflow-x: hidden;
    }

  }
</style>
