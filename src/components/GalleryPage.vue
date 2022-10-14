<template>
  <div>
    <s3-g-header>

    </s3-g-header>
    <s3-g-body>

    </s3-g-body>
  </div>
</template>

<script>
import router from "@/router";
import S3GHeader from "./S3GHeader";
import S3GBody from "./S3GBody";
export default {
  name: "GalleryPage",
  components: {S3GBody, S3GHeader},
  mounted(){
    if (this.$store.getters.getToken === "" && this.$cookies.get('mysession') === ""){
      router.push('/login')
    }
  }
}

</script>

<style scoped>

</style>