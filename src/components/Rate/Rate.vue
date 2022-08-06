<template>
  <div class='rate-licker'>

    <rate
      v-model="score"
      @change="handleChange"
    ></rate>

    <p>您选择了{{score}}分数</p>

    <x-button
      type="primary"
      @click="random"
    >随机</x-button>

  </div>
</template>

<script>
import { Rate, Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

export default {
  components: {
    Rate,
    XButton: Button
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    onChange: {
      type: Function,
      default: () => { }
    }
  },
  data () {
    return {
      score: 0
    }
  },
  methods: {
    random () {
      const getSorce = () => Math.floor((Math.random() * 5))
      let val = getSorce()
      if (val === this.score) {
        val = getSorce()
      }
      this.score = val
      this.handleChange(val)
    },
    handleChange (val) {
      this.onChange(val)
    }
  },
  created () {
    this.score = this.value || 0
  }
}
</script>
<style scoped>
</style>
