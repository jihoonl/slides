
/*
  utils.js

  common utils to use for my presentation
*/

function loadSubSections() 
{
  var top_sections = $("section");
  for(var i = 0; i < top_sections.length; i++)
  {
    var section = top_sections[i];
    var filename = "src/" + section.id + ".html"; 
    $(section).load(filename);
  }
}




function initReveal() {
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'none', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [
      { src: '../common/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: '../common/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '../common/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '../common/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: '../common/plugin/zoom-js/zoom.js', async: true },
      { src: '../common/plugin/notes/notes.js', async: true }
    ]
  });
};
