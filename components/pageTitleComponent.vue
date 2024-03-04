<script setup lang="ts">
const { divPositionClasses, textClasses } = defineProps<{
  divPositionClasses: string;
  textClasses: string;
  divSizesClasses: string;
}>();

const route = useRoute();
const navigation = useNavigation();
</script>

<template>
  <div
    v-if="route.name === 'index'"
    @click="navigation.toggle"
    :class="divPositionClasses"
  >
    <div :class="divSizesClasses">
      <img class="absolute" src="~/assets/shapes/titleImg.svg" />
      <Transition name="fade" appear>
        <p :class="textClasses">home</p>
      </Transition>
    </div>
  </div>
  <div v-else @click="navigation.toggle" :class="divPositionClasses">
    <div :class="divSizesClasses">
      <img class="absolute mx-auto" src="~/assets/shapes/titleImg.svg" />
      <Transition name="fade" appear>
        <p :key="route.name" :class="textClasses">{{ route.name }}</p>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
}
</style>
