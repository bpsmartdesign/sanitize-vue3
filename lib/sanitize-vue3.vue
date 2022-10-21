<script lang="ts" setup>
import sanitizeHtml from "sanitize-html";
import { Ref, ref, watch } from "vue";

interface DescriptionProps {
  html: string;
}
const block = ref() as Ref<HTMLDivElement>;

const onUpdateContent = () => {
  if (block.value) block.value.innerHTML = sanitizeHtml(props.html);
};

onUpdateContent();

watch(
  () => props.html as string | undefined,
  () => {
    onUpdateContent();
  },
  { immediate: true }
);

// eslint-disable-next-line no-unused-vars
const props = withDefaults(defineProps<DescriptionProps>(), {
  html: undefined,
});
</script>

<template>
  <div ref="block"></div>
</template>
