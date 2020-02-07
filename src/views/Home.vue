<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <BlogPost />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "home",
  components: {
    BlogPost
  }
};
</script>
