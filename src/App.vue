<template>
  <div class="box">
    <Index></Index>
      <Map></Map>
  </div>
</template>

<script type="text/ecmascript-6">
import Index from './components/index';
import Map from './components/map';
export default {
  name: 'App',
  components: {
    Index,
    Map
  }
};
</script>

<style>

</style>
