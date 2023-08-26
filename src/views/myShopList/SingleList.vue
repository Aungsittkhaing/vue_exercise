<template>
  <div>
    <h1>{{titleText}}</h1>
    <h2>{{paraText}}</h2>
    <div class="shadow-sm my-2 p-2" v-for="(item, index) in tasks" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleList",
  props: {
    titleText: {
      type: String,
      required: true,
      default: "this is default value"
    },
    paraText: {
      type: Number,
      required: true,
      default: 1000,
      validator(value) {
        return value > 10
      }
    }

  },
  data() {
    return {
      title: "This is all list page",
      tasks: [
        {
          name: "task one",
          status: false
        },
        {
          name: "task two",
          status: true
        },
        {
          name: "task three",
          status: false
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>