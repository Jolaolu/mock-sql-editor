<template>
  <article class="loader" />
</template>
<style>
.loader {
  border-radius: 100%;
  width: 2rem;
  margin: 0 auto;
  height: 2rem;
  border: 0.2rem solid blue;
  border-top: 0.2rem solid white;
  animation: spin .6s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
