<template>
  <div class="star-wars">
    <h1 data-cy="hero-name">{{ heroName }}</h1>
    <h2 data-cy="hero-birthday">{{ heroBirthday }}</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const swApiUrl = 'https://swapi.info/api/people/1';

const heroName = ref('');
const heroBirthday = ref('');

onMounted(() => {
  getStarWarsHero();
});

const getStarWarsHero = async (): Promise<void> => {
  try {
    const apiResponse = await fetch(swApiUrl);

    if (!apiResponse.ok) {
        throw new Error(`Response status: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();

    if (data.name) { heroName.value = data.name };
    if (data.birth_year) { heroBirthday.value = data.birth_year };
  } catch (error) {
    console.error(error);
  }
};
</script>