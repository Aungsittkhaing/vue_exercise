<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn btn-primary me-3" @click="goHome()">Go Home</button>
    <button class="btn btn-info" @click="goList()">Go List</button>
  </div>
</template>
<script>
export default {
  name: "About",
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goList(){
      this.$router.push('/allList')
    }
  },
}
</script>
