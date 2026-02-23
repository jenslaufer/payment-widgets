import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'


export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
        tailwindcss(),
        vue()],
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'PaymentWidgets',
            fileName: (format) => `vue-payment-widgets.${format}.js`,
        },
        cssCodeSplit: false,
        rollupOptions: {
            external: ['vue', 'axios', '@vuelidate/core', '@vuelidate/validators', '@stripe/stripe-js', 'vue-stripe-js'],
            output: {
                globals: {
                    vue: 'Vue',
                    axios: 'axios',
                    'vue-stripe-js': 'VueStripeJs',
                    '@vuelidate/core': 'VuelidateCore',
                    '@vuelidate/validators': 'VuelidateValidators',
                    '@stripe/stripe-js': 'StripeJs',
                },
            },
        },
    },
})