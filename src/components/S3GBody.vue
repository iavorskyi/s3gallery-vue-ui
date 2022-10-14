<template>
  <div class="container overflow-hidden">
    <s3-g-button @click="toggleAddItemDialog">ADD</s3-g-button>
    <div class="add__btn" v-show="getIsAddItemDialogOpen">

      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" @change="onFileSelected">
        <s3-g-button class="input-group-text" @click="upload">Upload</s3-g-button>
      </div>
    </div>

    <div>
      <h1 class="fw-light text-center text-lg-start mt-4 mb-0">{{getSelectedAlbum}}</h1>

      <hr class="mt-2 mb-5">

      <div class="row text-center text-lg-start" :key="getComponentKey">
        <div class="col-lg-3 col-md-4 col-6" v-for="path in getPaths" :key="path">
          <s3-g-item :path="path"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import S3GItem from "@/components/UI/S3GItem";
import {mapGetters, mapActions, mapMutations} from "vuex";
import S3GButton from "@/components/UI/S3GButton";

export default {
  name: "S3GBody",
  components: {S3GButton, S3GItem},
  computed: {
    ...mapGetters({
      getPaths: 'getPaths',
      getSelectedAlbum: 'getSelectedAlbum',
      getIsAddItemDialogOpen: 'getIsAddItemDialogOpen',
      getComponentKey: 'getComponentKey',
    }),

  },
  methods: {
    ...mapActions(['getItems']),
    ...mapMutations({
      toggle: 'updateIsAddItemDialogOpen'
    }),
    toggleAddItemDialog(){
      this.toggle()
    },
    onFileSelected(e){
       this.$store.commit('updateItemToUpload', e.target.files[0])
      e.target.files = null
    },
    upload() {
      this.$store.dispatch('upload')
    }
  },
  mounted() {
    this.$store.dispatch('getItems')
  }
}
</script>

<style scoped>
.add__btn{
  margin-bottom: 20px;
  margin-top: 20px;
}

</style>