<template>
  <div class="wrapper">

  <!-- Navbar -->
  <v-header></v-header>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <v-nav></v-nav>

  <!-- Content Wrapper. Contains page content -->
  <v-start></v-start>
  <!-- /.content-wrapper -->

  <!-- Main Footer -->
  <v-footer></v-footer>
</div>
</template>

<script>
import header from "@/components/home/header";
import nav from "@/components/home/nav";
import footer from "@/components/home/footer";
import start from "@/pages/start.vue";

export default {
  name: "Home",
  //   data () {
  //     return {
  //       msg: 'Welcome to Your Vue.js App'
  //     }
  //   }
  components: {
    "v-header": header,
    "v-nav":nav,
    "v-footer":footer,
    "v-start":start
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
