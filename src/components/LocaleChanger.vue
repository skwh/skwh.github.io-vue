<template>
    <div>
      <label for="locale">{{ $t('lang') }} </label>
      <select v-model="locale">
        <option v-for="lang of supportedLangs"
                :key="lang">{{ lang }}</option>
      </select>
    </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data: function () {
    this.$i18n.locale = 'en'
    return {
      supportedLangs: [ 'en', 'de' ],
      locale: 'en'
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<style>

div {
  font-family: "Space Mono", monospace;
  color: rgba(255, 255, 255, 0.8);
}

</style>
