<template>

  <a class="d-block mb-4 h-100">
    <div class="wrapper" @mouseover="turnIsSelected" @mouseleave="turnOffIsSelected">
      <img class="img-fluid img-thumbnail" :src="path" alt="">
        <img src="../../../node_modules/bootstrap-icons/icons/x-circle.svg" class="icon" @click="startToDeleteItem" :hidden="!isSelected">
    </div>

  </a>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "S3GItem",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(
        {
          deleteItem: 'deleteItem'
        }),
    ...mapMutations({
      selectItemToDelete:'updateItemIdToDelete'
    }),
    turnIsSelected(){
      // if (this.isSelected){
      //   await this.sleep(1000);
      // }

      this.isSelected = true;
    },
    turnOffIsSelected(){
      this.isSelected = false;
    },
    sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  },
    startToDeleteItem(){
      this.selectItemToDelete(this.path.split("/")[5])
      this.deleteItem()
      this.selectItemToDelete("")
    }

  },
  data(){
    return{
      isSelected: false
    }
  },
}
</script>

<style scoped>
  .wrapper {
    position:relative
  }
  .icon {
    position:absolute;
    top:5%;
    left:5%;
    background: white;
    border-radius: 30px;
    opacity: 60%;
}

</style>