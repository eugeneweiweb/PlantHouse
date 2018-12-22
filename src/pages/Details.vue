<template>
  <div class="detail">
    detail
  </div>
</template>

<script>

import {
  mapMutations
} from 'vuex'
import * as mutationTypes from '../store/mutationTypes'
export default {
  name: 'detail',
  data () {
    return {
      details: {}
    }
  },
  created (state) {
    this.handleIsShowBack(true)
  },
  beforeDestroy (state) {
    this.handleIsShowBack(false)
  },
  methods: {
    ...mapMutations([
      mutationTypes.handleIsShowBack
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
