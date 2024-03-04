<script setup lang="ts">
import gsap from "gsap";

defineProps<{
  links: { to: string; label: string }[];
}>();

const beforeEnter = (el: any) => {
  console.log(el);
  el.style.opacity = "0";
  el.style.transitionDelay = "0.5s";
};

const onEnter = (el: any, done: () => void) => {
  console.log(el);
  gsap.to(el, {
    opacity: 1,
    duration: 0.3,
    delay: el.dataset.index ? +el.dataset.index * 0.3 : 0,
    onComplete: done,
  });
};
</script>

<template>
  <div>
    <div>
      <img
        style="clip-path: polygon(0 0, 88% 0, 64% 100%, 0% 100%)"
        src="~/assets/shapes/bg-mobile2.svg"
        alt="stars"
        class="fixed min-h-screen h-[1800px] max-w-[1000px] xl:left-[-300px] left-[-500px] top-[-250px] bg-black -z-10 border-black border-8"
      />
      <div
        class="flex flex-col text-5xl w-[400px] xl:ml-16 ml-8 translate-x-[-10%] pb-44 h-screen justify-center items-center gap-2 z-20"
      >
        <TransitionGroup @before-enter="beforeEnter" @enter="onEnter" appear>
          <NavItem
            v-for="(link, index) in links"
            :to="link.to"
            :key="index"
            :index="index"
            :label="link.label"
            :data-index="index"
          />
        </TransitionGroup>
      </div>
    </div>
    <PageTitleComponent
      :div-position-classes="' cursor-pointer xl:left-40 fixed z-[-10] bottom-0'"
      :text-classes="'absolute top-[30%] font-bold uppercase tracking-wide text-white left-[50%] translate-x-[-50%] translate-y-[-10%]  rotate-[-10deg] font-expose text-8xl'"
      :div-sizes-classes="'w-[500px] h-[200px] relative'"
    />
  </div>
</template>

<!-- <style scoped>
.list-enter-active {
  transition: all 0.4s ease;
  transition-delay: 1s;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}
</style> -->
