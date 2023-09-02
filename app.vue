<template>
  <div>
    <h1>{{ $t('hello', { name: 'Yo!!!' }) }}</h1>

    <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="ja">ja</option>
      </select>
    </form>

  </div>
</template>
