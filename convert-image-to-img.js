const { parse } = require('recast');

module.exports = function transformer(fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Remove next/image import
  root.find(j.ImportDeclaration, { source: { value: 'next/image' } }).remove();

  // Replace <Image ... /> with <img ... />
  root.find(j.JSXElement, {
    openingElement: { name: { name: 'Image' } }
  }).forEach(path => {
    path.node.openingElement.name.name = 'img';
    if (path.node.closingElement) {
      path.node.closingElement.name.name = 'img';
    }
  });

  return root.toSource();
};
