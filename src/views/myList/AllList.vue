<template>
  <div>
    <h1>This is all list page</h1>
    <List/>
    <List/>
    <List/>
    <List/>
    <List/>
  </div>
</template>

<script>
import List from "./EachList.vue"
export default {
  name: "AllList",
  components: {List}
}
</script>

<style scoped>

</style>