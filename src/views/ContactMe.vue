<i18n>
{
  "en": {
    "contact": "Contact Me"
  },
  "de": {
    "contact": "Kontakt"
  }
}
</i18n>

<template>
  <main>
    <h1>{{ $t('contact') }}</h1>
    <h3><a class="in" href="mailto:evan.derby@du.edu">Email</a></h3>
    <h3><a class="in" href="http://github.com/skwh">Github</a></h3>
    <h3><a class="in" href="https://www.linkedin.com/in/evan-derby-24214274">LinkedIn</a></h3>
    <h4><router-link class="out" v-bind:to="'/'">{{ $t('back') }}</router-link></h4>
  </main>
</template>

<script>
export default {
  name: 'ContactMe'
}
</script>

<style>
</style>
