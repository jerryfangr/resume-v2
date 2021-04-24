/**
 * * common utils
 */
const ResumeUtils = {
  /**
   * split text by newline symbol(\n)
   * @param {string} text 
   * @returns Array
   */
  textToList(text) {
    const lineList = [];
    const emptyRegExp = /^[\r\n ]{0,}$/gi;
    text.split(/[\r\n]/gi).forEach(lineText => {
      lineText = lineText.trim();
      if (!emptyRegExp.test(lineText)) {
        lineText = lineText.replace(/[\r\n]/gi, '');
        lineList.push(lineText);
      }
    });

    return lineList;
  },
}

/**
 * * vue plugin install function
 */
ResumeUtils.install = function (Vue, configOptions) {
  Vue.prototype.$_resumeUtil = ResumeUtils;
}

export default ResumeUtils;