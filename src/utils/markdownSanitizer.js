const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService();

    const convertToHtml = marked.parse(markdownContent);
    console.log("convert to html : ",convertToHtml);
    const sanitizedHtml = sanitizeHtmlLibrary(convertToHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });
    console.log("sanitized html : ", sanitizedHtml);
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log("sanitized markdown : ", sanitizedMarkdown);
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;