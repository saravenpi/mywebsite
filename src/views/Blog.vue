<template>
  <NotionRenderer v-bind="blockMap" fullPage />
</template>

<script>
import { NotionRenderer, getPageBlocks } from "vue-notion";

export default {
  components: { NotionRenderer },
  data() {
    return {
      blockMap: null
    }
  },
  async created() {
    // get Notion blocks from the API via a Notion pageId
    this.blockMap = await getPageBlocks("8c1ab01960b049f6a282dda64a94afc7");
  },
};
</script>

<style>
@import "vue-notion/src/styles.css"; /* optional Notion-like styles */
</style>
