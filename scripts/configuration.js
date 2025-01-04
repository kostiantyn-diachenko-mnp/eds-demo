const THEMES = [
  'eds-demo',
  'brand-a-demo',
];

const TEMPLATES = [];

const CUSTOMIZED_BLOCKS = {
  'header-brand-a-demo': { css: false, js: true },
};

function isExistingTheme(theme) {
  return THEMES.includes(theme);
}

function isExistingTemplates(template) {
  return TEMPLATES.includes(template);
}

function hasCustomizedBlockCss(blockName, theme) {
  const customizedBlockName = `${blockName}-${theme}`;
  return customizedBlockName in CUSTOMIZED_BLOCKS && CUSTOMIZED_BLOCKS[customizedBlockName].css;
}

function hasCustomizedBlockJs(blockName, theme) {
  const customizedBlockName = `${blockName}-${theme}`;
  return customizedBlockName in CUSTOMIZED_BLOCKS && CUSTOMIZED_BLOCKS[customizedBlockName].js;
}

export {
  isExistingTheme,
  isExistingTemplates,
  hasCustomizedBlockCss,
  hasCustomizedBlockJs,
};
