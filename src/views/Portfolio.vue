<i18n>
{
  "en": {
    "projects": [
      "Cryptogram Game",
      "Either and Maybe in Typescript",
      "D&D Assistant",
      "GroupMe Electron App",
      "Hello LA!"
    ]
  },
  "de": {
    "projects": [
      "Kryptogramm Spiel",
      "Either und Maybe Entwurfsmuster mit Typescript",
      "D&D Hilfskraft",
      "GroupMe Electron App",
      "Hallo LA!"
    ]
  }
}
</i18n>

<template>
  <main>
    <h1>{{ $t('portfolio') }}</h1>
    <project-list-item v-for="(project, idx) in projectUrls"
                       :key="idx"
                       :projectId="project">
                        {{ $t(`projects[${idx}]`) }}
                    </project-list-item>
    <h4>
      <router-link class="out"
                   v-bind:to="'/'">
                     {{ $t('back') }}
                </router-link>
    </h4>
  </main>
</template>

<script>
import ProjectListItem from '../components/ProjectListItem'

export default {
  name: 'Portfolio',
  components: {
    ProjectListItem
  },
  data () {
    return {
      projectUrls: [
        'cryptogram-game',
        'either-maybe',
        'dnd-assistant',
        'groupme-client',
        'hello-la'
      ]
    }
  }
}
</script>

<style>

</style>
