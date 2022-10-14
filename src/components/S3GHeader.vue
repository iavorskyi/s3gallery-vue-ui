<template>
  <div class="header">
    <div>
      <h1>S3 Gallery</h1>
    </div>
    <div>
      <s3-g-select
          v-model="selectedAlbum"
          :options="albumOptions"
      />
    </div>
    <div>
      <div>
        <h2 v-text="getUser"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import S3GSelect from "@/components/UI/S3GSelect";

export default {
  name: "S3GHeader",
  components: {S3GSelect},
  computed: {
    ...mapGetters({
                 getUser: 'getUser',
                 getAlbums: 'getAlbums',
                 getSelectedAlbum: 'getSelectedAlbum'
               }),

    selectedAlbum: {
      get () {
        return this.getSelectedAlbum
      },
      set (value) {
        this.$store.commit('updateSelectedAlbum', value)
        this.$store.dispatch('getItems')
      }
    }

},
  data (){
    return {
      albumOptions: []
    }
  },
  methods:{
    ...mapActions({
      fetchAlbums: 'fetchAlbums'
    })
  },
  created() {
    this.fetchAlbums()
  },
  mounted() {
    this.getAlbums.forEach((album)=>this.albumOptions.push({name:album.Name, value: album.Name }))
    this.$store.commit('updateSelectedAlbum', this.albumOptions[0].value)
  },
}

</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }

</style>