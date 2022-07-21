import sortOrderSmacss from 'stylelint-config-property-sort-order-smacss/generate'

export default {
  extends: "stylelint-config-standard",
  plugins: [
    "stylelint-order"
  ],
  overrides: [
    {
      "files": ["**/*.vue"],
      "customSyntax": "postcss-html",
    }
  ],
  rules: {
    'order/properties-order': [
      sortOrderSmacss()
    ],
  },
}