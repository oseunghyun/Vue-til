<template>
  <ul>
    <li>
      <div class="post-title">{{ postItem.title }}</div>
      <div class="port-content">{{ postItem.contents }}</div>
      <div class="port-time">{{ postItem.createdAt }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
