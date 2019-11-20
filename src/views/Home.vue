<template>
  <main class='centered'>
    <h1>Evan Derby</h1>
    <h4 class="subtitle">Full-Stack Developer &amp; UI/UX Engineer</h4>
    <h3>
      <router-link class="in internal-link"
                   to="/portfolio">Portfolio</router-link>
    </h3>
    <h3>
      <a class="in"
         target="_blank"
         :href="`${baseUrl}Resume_9.pdf`">Resume</a>
    </h3>
    <h3>
      <router-link class="in internal-link"
                   to="/contact-me">Contact Me</router-link>
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
        ['Resume', process.env.BASE_URL + 'Resume_9.pdf'],
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
