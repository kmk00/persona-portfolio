<script setup>
const navigation = useNavigation();
</script>

<template>
  <div>
    <div class="text-customGray-100 font-markin p-8 text-xl">
      <!-- :class="navigation.isOpen ? 'hidden' : 'block'" -->
      <div class="transform -skew-y-6 relative z-0 bg-black p-2">
        <div class="bg-white p-2">
          <div
            class="bg-customGray-400 max-h-[300px] md:max-h-[400px] overflow-y-auto"
          >
            <p class="p-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make. Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
            </p>
          </div>
        </div>
      </div>
    </div>
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-0 z-0"
      src="~/assets/shapes/home-rect.svg"
    />
    <img
      :class="navigation.isOpen ? 'hidden' : 'block'"
      class="lg:hidden fixed bottom-0 right-0 z-0"
      src="~/assets/shapes/home-rect2.svg"
    />
  </div>
</template>
