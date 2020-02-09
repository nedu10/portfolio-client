<template>
  <div class="home">
    <!-- <BlogPost /> -->

    <!-- ====header component ===== -->
    <app-header />

    <!-- ===intro section === -->
    <app-intro-section />

    <!-- ======about======= -->
    <app-about />
  </div>
</template>

<script>
// @ is an alias to /src
// import BlogPost from "@/components/BlogPost/BlogPost.vue";

import appHeader from "@/components/reuseable_component/Header.vue";
import appIntroSection from "@/components/reuseable_component/IntroSection.vue";
import appAbout from "@/components/reuseable_component/About.vue";

export default {
  name: "home",
  components: {
    // BlogPost
    appHeader,
    appIntroSection,
    appAbout
  }
};
</script>
