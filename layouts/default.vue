<template>
  <div class="display bg-customGray-400 min-h-screen flex flex-col">
    <NavigationControll />
    <Container>
      <slot />
    </Container>
    <StartPage />
  </div>
</template>
