<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>
    <div class="profile">
      <profile-top></profile-top>
      <profile-middle></profile-middle>
    </div>
    <profile-bottom></profile-bottom>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import ProfileBottom from "./childComps/ProfileBottom.vue";
import ProfileMiddle from "./childComps/ProfileMiddle.vue";

import ProfileTop from "./childComps/ProfileTop.vue";

export default {
  name: "Profile",
  data() {
    return {};
  },
  components: { NavBar, ProfileTop, ProfileMiddle, ProfileBottom },
};
</script>

<style scoped>
.profile-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
