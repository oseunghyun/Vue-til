<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon icon-md-create"></i>
      <i class="icon icon-md-trash"></i>
    </div>
  </li>
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
