function hideResults() {
  document.getElementById('html').setAttribute('class', 'hidden');
  document.getElementById('css').setAttribute('class', 'hidden');
  document.getElementById('javascript').setAttribute('class', 'hidden');
}

function getResult(name) {
  const el = document.querySelector("input[name='" + name + "']:checked");
  if (!el) {
    console.error('Could not find input with name: ' + name);
    return;
  }
  return el.value;
}

function getResults() {
  return {
    focus: getResult('focus'),
    patterns: getResult('patterns'),
    solve: getResult('solve'),
    puzzle: getResult('puzzle'),
    details: getResult('details'),
  };
}

// returns html, css, or js
function determineLanguage(results) {
  //design, text, func
  const focus = results.focus;
  // good, bad, what
  const patterns = results.patterns;
  //love, terr,joke
  const solve = results.solve;
  //yay, yuck, five
  const puzzle = results.puzzle;
  //abs, big, say
  const details = results.details;

  if (focus === 'design' && patterns === 'bad') {
    return 'css';
  }
  if (focus === 'text' && solve === 'joke') {
    return 'html';
  }
  if (puzzle === 'yay' && details === 'big') {
    return 'javascript';
  }
  if (details === 'good' && solve === 'design') {
    return 'css';
  }
}

window.onload = function () {
  const form = document.querySelector('#language-questions');
  if (!form) {
    console.error('Could not find form');
    return;
  }
  form.onsubmit = function (event) {
    event.preventDefault();
    hideResults();
    // const { details, focus, patterns, puzzle, solve } = getResults();

    const results = getResults();
    console.log('form submit results', results);

    const language = determineLanguage(results);
    console.log('language', language)
    if (language === 'html') {
      document.getElementById('html').removeAttribute('class');
    }
    if (language === 'css') {
      document.getElementById('css').removeAttribute('class');
    }
    if (language === 'javascript') {
      document.getElementById('javascript').removeAttribute('class');
    }
  };
};

