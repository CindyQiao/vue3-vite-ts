module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    parser: 'vue-eslint-parser',
    extends: ['plugin:vue/vue3-essential', 'plugin:vue/vue3-strongly-recommended', 'plugin:vue/vue3-recommended'],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    "parser": "vue-eslint-parser",
    rules: {
        // 'no-console': 'off',
        'comma-dangle': [4, 'never'], //禁止使用拖尾逗号
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'generator-star-spacing': 'off',
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "never",
                "normal": "any",
                "component": "any"
            },
            "svg": "always",
            "math": "always"
        }]
    }
}