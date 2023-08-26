<template>
  <div>
    <Contact/>
  <SingleList title-text="title text" :para-text=100 />
  </div>
</template>

<script>
import SingleList from "@/views/myShopList/SingleList";
import Contact from "@/views/Contact";
export default {
  name: "AllList",
  components: {Contact, SingleList},
}
</script>

<style scoped>

</style>