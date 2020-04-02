<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
    <div id="locale">
      <locale-changer></locale-changer>
    </div>
  </div>
</template>

<script>
import LocaleChanger from './components/LocaleChanger.vue'

export default {
  name: 'App',
  components: {
    LocaleChanger
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.length
      const fromDepth = from.path.length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>

#locale {
  position: fixed;
  bottom: 1%;
  right: 1%;
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: scale(0.95);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: scale(1.05);
}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: #222;
  font-size: 16px;
  font-variant-ligatures: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

div#app {
  color: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

main {
  transition: all 0.35s cubic-bezier(.55,0,.1,1);
  max-width: 65vw;
  padding: 10vh 0;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Space Mono", monospace;
}

p, span {
  font-family: "Open Sans", sans-serif;
}

h1 {
  font-size: 5rem;
}

h1, h3 {
  margin: 0;
}

h3 {
  text-indent: 0.75rem;
  font-size: 1.35rem;
}

h4 {
  font-size: 1.25rem;
  margin: 0.5rem;
}

h4>a:hover {
  color: #AAA;
}

h3>a:hover {
  color: rgb(66, 134, 244);
}

h3>a {
  transition: color 0.3s;
}

h3>a::after, h4>a::before {
  font-size: 0.75rem;
  transition: margin 0.2s;
}

h3>a.in::after {
  content: "  >>";
}

h4>a.out::before {
  content: "<< ";
}

h4>a.out:hover::before {
  margin-right: 5px;
}

h3>a.in:hover::after {
  margin-left: 5px;
}

code {
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
  display: block;
  padding: 1rem;
  text-align: center;
}

@media only screen and (min-width: 320px) {
  html {
    font-size: 0.75em;
  }
  h1 {
    font-size: 2.9rem;
    word-spacing: -0.5rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}
@media only screen and (min-width:425px) {
  html {
    font-size: 0.95em;
  }
  h3 {
    font-size: 1.35rem;
  }
}
@media only screen and (min-width:768px) {
  html {
    font-size: 1em;
  }
  h1 {
    font-size: 4rem;
  }
}
@media only screen and (min-width:1440px) {
  h1 {
    font-size: 5rem;
  }
}
</style>
