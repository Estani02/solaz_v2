const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  root: true, // root: true, sirve para que no busque más allá de este archivo de configuración de eslint (no suba a la carpeta padre)
  plugins: ['prettier', 'import'],
  extends: [
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100, //  el ancho máximo de una línea es de 100 caracteres
        trailingComma: 'all', // todos los objetos y arrays van a tener una coma al final
        tabWidth: 2, // el tamaño de la tabulación es de 2 espacios
        semi: false, //  todos los statements no van a tener un punto y coma al final
        singleQuote: true, //  todas las strings van a tener comillas simples
        bracketSpacing: true, //  va a haber un espacio entre los brackets de los objetos
        arrowParens: 'always', //  los paréntesis de las arrow functions van a ser siempre requeridos
        endOfLine: 'auto', // el fin de línea va a ser el mismo que el del sistema operativo
      },
    ],
    // import/order es una regla de eslint-plugin-import que nos permite ordenar los imports
    'import/order': [
      'warn',
      {
        groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          // pathGroups nos permite definir grupos de imports que coincidan con un patrón
          {
            pattern: '~/**', // ~/** es un alias que se usa para importar desde la carpeta src
            group: 'external', // los imports que coincidan con este patrón van a ir al grupo external
            position: 'after', // los imports que coincidan con este patrón van a ir al final del grupo external
          },
        ],
        'newlines-between': 'always', // va a haber un salto de línea entre cada grupo
      },
    ],
    'padding-line-between-statements': [
      // nos permite definir saltos de línea entre statements (un statement es una línea de código)
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] }, // va a haber un salto de línea entre cualquier statement y un return o export
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' }, // va a haber un salto de línea entre cualquier declaración de variable y cualquier statement
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }, // va a haber un salto de línea entre cualquier declaración de variable y cualquier otra declaración de variable
    ],
    'no-console': 'warn', // nos permite definir si se pueden usar o no ciertos métodos de console
    'react/prop-types': 'off', // nos permite definir si los componentes de React deben tener o no propTypes
    'react/jsx-uses-react': 'off', // nos permite definir si se puede usar o no React en el código
    'react/react-in-jsx-scope': 'off', // nos permite definir si se puede usar o no React en el código
    'react/self-closing-comp': 'warn', // nos permite definir si los componentes de React deben ser o no self-closing es decir si deben tener o no un tag de cierre
    'react/jsx-sort-props': [
      // nos permite definir si los props de los componentes de React deben estar o no ordenados
      'warn',
      {
        callbacksLast: true, // los callbacks van a ir al final
        shorthandFirst: true, // los props shorthand van a ir al principio
        noSortAlphabetically: false, // los props no van a estar ordenados alfabéticamente
        reservedFirst: true, // los props reservados van a ir al principio
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'off', // nos permite definir si se pueden usar o no template literals
    '@typescript-eslint/no-non-null-assertion': 'off', // nos permite definir si se pueden usar o no non-null assertions
    '@typescript-eslint/explicit-function-return-type': 'off', // nos permite definir si las funciones deben tener o no un tipo de retorno explícito
    '@typescript-eslint/no-unused-vars': [
      // nos permite definir si se pueden usar o no variables no usadas
      'warn',
      {
        args: 'after-used', // solo las variables que se usen después de declaradas van a ser consideradas
        ignoreRestSiblings: false, // las variables rest siblings no van a ser ignoradas. las variables rest siblings son las que se declaran con ...rest
        argsIgnorePattern: '^_.*?$', // las variables que coincidan con este patrón van a ser ignoradas
      },
    ],
  },
}
