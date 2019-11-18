<template>
  <main>
    <h1>Portfolio</h1>
    <project-list-item v-for="project in projectNames"
                       :key="project[1]"
                       :projectId="project[1]">
                        {{ project[0] }}
                    </project-list-item>
    <h4>
      <router-link class="out"
                   v-bind:to="'/'">
                     Back
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
      projectNames: [
        ['Cryptogram Game', 1],
        ['Either & Maybe in Typescript', 2],
        ['D&D Assistant', 3],
        ['Groupme Electron App', 4],
        ['Hello LA!', 5]
      ]
    }
  }
}
</script>

<style>

</style>
