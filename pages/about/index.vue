<script setup>
const navigation = useNavigation();

useSeoMeta({
  title: "About",
  description: "About me",
});
</script>

<template>
  <div>
    <div
      class="text-customGray-100 relative z-30 font-expose tracking-widest p-8 text-xl"
    >
      <p class="p-4 text-center text-4xl">
        Hey there! I'm a 23-year-old web development enthusiast with a passion
        for building things for the web. I'm constantly learning and exploring
        new technologies
      </p>

      <img
        :class="navigation.isOpen ? 'hidden' : 'block'"
        class="w-20 mx-auto opacity-20"
        src="~/assets/shapes/Star.svg"
      />

      <p class="p-4 text-center text-4xl">
        Beyond code, I'm fascinated by the world of cinematography and the art
        of storytelling through film. I also have a deep interest in Japanese
        language and culture, and I'm always looking for ways to expand my
        knowledge.
      </p>

      <img
        :class="navigation.isOpen ? 'hidden' : 'block'"
        class="w-20 mx-auto opacity-20"
        src="~/assets/shapes/Star.svg"
      />

      <p class="p-4 z-10 relative text-center text-4xl">
        When I'm not coding, you might find me unwinding with a captivating book
        or catching the thrill of a football match, cheering on my favorite
        team.
      </p>

      <img
        :class="navigation.isOpen ? 'hidden' : 'block'"
        class="w-20 mx-auto opacity-20"
        src="~/assets/shapes/Star.svg"
      />

      <p class="p-4 pb-12 text-center text-4xl">
        I'm currently looking for new opportunities.
      </p>
    </div>
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="fixed lg:hidden bottom-0 z-0"
      src="~/assets/shapes/home-rect.svg"
    />
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="fixed bottom-0 right-0 z-0"
      src="~/assets/shapes/home-rect2.svg"
    />
  </div>
</template>
