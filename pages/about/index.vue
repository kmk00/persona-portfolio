<script setup>
const navigation = useNavigation();
</script>

<template>
  <div>
    <div class="text-customGray-100 relative z-30 font-markin p-8 text-xl">
      <!-- :class="navigation.isOpen ? 'hidden' : 'block'" -->
      <div class="transform -skew-y-2 relative z-0 bg-black p-2">
        <div class="bg-white p-2">
          <div
            class="bg-customGray-400 max-h-[300px] md:max-h-[600px] xl:max-h-[700px] overflow-y-auto scrollbar scrollbar-thumb-customYellow scrollbar-track-customGray-300 scrollbar-thin"
          >
            <p class="p-4 md:text-3xl lg:text-5xl">
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
              industry's standard dummy text ever since the 1500s, when an the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make.Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an the
              printing and typesetting industry. Lorem Ipsum has been the
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
