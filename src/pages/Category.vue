<template>
  <div class="category">
    <router-link
      :key="item.id"
      v-for="item in list"
      class="list-item"
      :to="{
        name: 'details',
        params: {
          id: item.id
        }
      }"
    >
      <dl>
        <dt>
          <img :src="item.img" :alt="item.name"/>
        </dt>
        <dd>
          <div class="priceNameAdd">
            <div class="priceName">
              <em>￥{{item.price}}</em><br/>
              <b>{{item.name}}</b>
            </div>
            <div class="addToCart">
              <span>添加</span>
            </div>
          </div>
          <i>{{item.title}}</i>
        </dd>
      </dl>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'category',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$http.getProductList(to.params.categoriesId)
        .then(resp => {
          vm.list = resp
        })
    })
  },
  // 由于是动态路由,berforeRouteEnter只会执行一次,所以要在beforeRouteUpdate中再请求,
  // 使得每次切换分类时都更新数据
  beforeRouteUpdate (to, from, next) {
    this.$http.getProductList(to.params.categoriesId)
      .then(resp => {
        this.list = resp
      })
    next()
  },
  data () {
    return {
      list: []
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-item{
    >dl{
      width: 30vw;
      height: 50vw;
      float: left;
      margin: 3.5vw;
      >dt{
        width: 30vw;
        height: 30vw;
        img{
          width: 30vw;
          height: 30vw;
        }
      }
      >dd{
        .priceNameAdd{
          width: 100%;
          height: 10vw;
          .priceName{
            float: left;
            width: 60%;
            em{
            color: red;
            font-size: 3vw;
          }
          b{
            font-size: 2vw;
            color: #999;
          }
          }
          .addToCart{
            margin: 1vw;
            float: right;
            width: 10vw;
            height: 8vw;
            font-size: 12px;
            line-height: 8vw;
            text-align: center;
            color: #eee;
            border-radius: 2vw;
            background-color: pink;
          }
        }
        i{
          font-size: 12px;
          color: #ddd;
        }
      }
    }
  }
</style>
