/** @type {import('eslint').Rule.RuleModule} */
const rule = {
    create(context) {
      return {
        Identifier: function(node) {
          if (node.name.length === 1) {
            context.report({
              node,
              message: 'Avoid single-letter identifiers'
            })
          }
        },
      }
    }
  }
  
  module.exports = rule
  