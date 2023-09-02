import { createI18n } from 'vue-i18n'
export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en',
        messages: {
            en: {
                hello: 'Hello, {name}!',
                language: "Language"
            },
            ja: {
                hello: "こんにちは、{name}！",
                language: "言語"
            }
        }
    })

    vueApp.use(i18n)
})