<template>
  <main class='centered'>
    <h1>Evan Derby</h1>
    <h4 class="subtitle">Full-Stack Developer | UI/UX Engineer</h4>
    <h5 class="subtitle">&amp; Haskell enthusiast</h5>
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
h4.subtitle {
  margin: 0;
  margin-left: 6px;
  transform: translateY(-18px);
}

h5 {
  margin: 0;
}

h5.subtitle {
  text-align: right;
  transform: translateY(-18px);
}

</style>
