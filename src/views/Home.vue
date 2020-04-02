<i18n>
{
  "en": {
    "position": "Full-Stack Developer & UI/UX Engineer",
    "resume": "Resumé",
    "contact": "Contact Me"
  },
  "de": {
    "position": "Fullstack Web- und UI/UX Entwickler",
    "resume": "Resümee",
    "contact": "Kontakt"
  }
}
</i18n>
<template>
  <main class='centered'>
    <h1>Evan Derby</h1>
    <h4 class="subtitle">{{ $t('position') }}</h4>
    <h3>
      <router-link class="in internal-link"
                   to="/portfolio">{{ $t('portfolio') }}</router-link>
    </h3>
    <h3>
      <a class="in"
         target="_blank"
         :href="`${baseUrl}Resume_9.pdf`">{{ $t('resume') }}</a>
    </h3>
    <h3>
      <router-link class="in internal-link"
                   to="/contact-me">{{ $t('contact') }}</router-link>
    </h3>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      pages: [
        ['Portfolio', '/portfolio'],
        ['Resume', process.env.BASE_URL + 'Resume_11.pdf'],
        ['Contact Me', '/contact-me']
      ],
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>

<style>
.subtitle {
  margin: 0;
  margin-left: 0.5rem;
  margin-bottom: 0.75rem;
}

@media screen and (min-width:768px) {
  .subtitle {
    margin-bottom: 1rem;
    font-size: 1.15rem;
  }
}
</style>
