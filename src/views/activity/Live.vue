<template>
  <div class="index-live">
    <div id="player"></div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {};
    },
    mounted: function () {
      var playerLive = polyvObject("#player").livePlayer({
        width: "100%",
        height: "100%",
        flashvars: {
          is_barrage: "on",
          VolumeM: "0"
        },
        uid: "e405i666d0",
        vid: "234028"
      });
    }
  };
</script>
<style scoped>
  [v-cloak] {
    display: none;
  }
.index-live{
  width: 100%;
  height: 100%;
}
  #player {
    width: 100%;
    height: 100%;
    max-width: 10.8rem;
    margin: 0 auto;
  }
</style>