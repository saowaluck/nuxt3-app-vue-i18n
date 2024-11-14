<template>
  <div class="bg-gray-100">
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img alt="Logo" class="w-10 h-10" src="logo.png">
          <span class="text-xl font-semibold text-gray-700">MyWebsite</span>
        </div>

        <!-- Navigation Menu -->
        <nav class="hidden md:flex space-x-6">
          <a class="text-gray-600 hover:text-blue-500" href="#home">{{ $t('home') }}</a>
          <a class="text-gray-600 hover:text-blue-500" href="#about">{{ $t('about') }}</a>
          <a class="text-gray-600 hover:text-blue-500" href="#services">{{ $t('services') }}</a>
          <a class="text-gray-600 hover:text-blue-500" href="#contact">{{ $t('contact') }}</a>
        </nav>

        <!-- Language Switcher -->
        <div class="flex items-center space-x-2">
          <form>
            <label for="locale-select">{{ $t('language') }}: </label>
            <select id="locale-select" v-model="$i18n.locale"
                    class="text-gray-600 border border-gray-300 rounded-md p-1"
                    name="language">
              <option value="en">en</option>
              <option value="ja">ja</option>
            </select>
          </form>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-8">
      <h1>{{ $t('hello', {name: 'ODDS CONF 🎉'}) }}</h1>
      <h1 class="text-3xl font-bold text-gray-800">Welcome to My Website</h1>
      <p class="mt-4 text-gray-600">This is a simple homepage example with Tailwind CSS, featuring a logo, navigation
        menu, and language switcher.</p>
    </main>

  </div>
</template>
<script lang="ts" setup>
</script>
