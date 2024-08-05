const { default: tailwindConfig } = require("./tailwind.config");

const config = {
    semi: false,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2,
    endOfLine: 'auto',
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-css-order', 'prettier-plugin-style-order', 'prettier-plugin-tailwindcss',],
    tailwindConfig: './tailwind.config.js',
    tailwindFunctions: ['clsx', 'cn', 'cva'],
    importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
}

module.exports = config;