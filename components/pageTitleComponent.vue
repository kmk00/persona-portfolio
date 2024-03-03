<script setup lang="ts">
const { divPositionClasses, textClasses } = defineProps<{
  divPositionClasses: string;
  textClasses: string;
  divSizesClasses: string;
}>();

const route = useRoute();
const navigation = useNavigation();
const text = ref(route.name);

watch(route, () => {
  text.value = route.name;
});
</script>

<template>
  <div
    v-if="route.name === 'index'"
    @click="navigation.toggle"
    :class="divPositionClasses"
  >
    <div :class="divSizesClasses">
      <img class="absolute" src="~/assets/shapes/titleImg.svg" />
      <p :class="textClasses">home</p>
    </div>
  </div>
  <div v-else @click="navigation.toggle" :class="divPositionClasses">
    <div :class="divSizesClasses">
      <img class="absolute mx-auto" src="~/assets/shapes/titleImg.svg" />
      <p :class="textClasses">{{ route.name }}</p>
    </div>
  </div>
</template>
