<template>
  <div>
    <h1>{{ this.$route.params.name}}</h1>
    <h1>{{this.$route.params.age}}</h1>
    <h1 class="text-info">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      title: "This is contact page"
    }
  },
}
</script>

<style scoped>

</style>