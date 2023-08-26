<template>
  <div class="my-3">
    <li class="list-group-item mx-5">
      <input type="text" class="form-control" v-model="listText" @keyup.enter="saveText()" v-if="isEdit">
      <span v-else @dblclick="editText()">{{ listText }}</span>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listText: "",
      isEdit: true
    }
  },
  methods: {
    saveText() {
      return this.isEdit = false
    },
    editText(){
      return this.isEdit = true
    }
  },
}
</script>

<style scoped>

</style>