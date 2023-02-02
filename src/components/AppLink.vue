<template>
  <a v-if="isExternal" :href="to" target="_blank" rel="noopener"><slot/></a>
  <router-link v-else v-bind="$props"><slot/></router-link>
</template>

<script>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
export default {
  name: "AppLink",
  props: {
    ...RouterLink.props
  },
  setup (props) {
    const isExternal = computed(() => {
      return typeof props.to === 'string' && props.to.startsWith('http');
    })

    return {
      isExternal
    }
  }
}
</script>

<style lang="scss" scoped>

</style>