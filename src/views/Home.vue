<template>
  <main class='centered'>
    <h1>Evan Derby</h1>
    <h4 class="subtitle">Front-End Developer &amp; UI/UX Designer</h4>
    <h3>
      <router-link class="in internal-link"
                   to="/portfolio">Portfolio</router-link>
    </h3>
    <h3>
      <a class="in"
         target="_blank"
         href="../../static/Resume_5.pdf">Resume</a>
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
        ['Resume', '../../static/Resume_5.pdf'],
        ['Contact Me', '/contact-me']
      ]
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

</style>
