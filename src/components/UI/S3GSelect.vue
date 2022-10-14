<template>
  <select class="form-select" aria-label="Default select example" :value="modelValue" @change="changeOption">
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value">
      {{option.name}}
    </option>
  </select>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed:{
    ...mapGetters({
      getAlbums: 'getAlbums'
    })
  },
  props:{
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: ()=>[]
    }
  },
  name: "S3GSelect",
  methods: {
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style scoped>

</style>