<template>
    <Layout class-prefix="layout">
      <NumberPad />
      <Types :prop-a="333"/>
      <Notes />
      <Tags />
    </Layout>
</template>

<script lang="ts">
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';

export default {
  name: 'Money',
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>