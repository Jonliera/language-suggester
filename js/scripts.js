function hideResults() {
  document.getElementById('html').setAttribute('class', 'hidden');
  document.getElementById('css').setAttribute('class', 'hidden');
  document.getElementById('javascript').setAttribute('class', 'hidden');
}

function getResult(name) {
  const element = document.querySelector("input[name='" + name + "']:checked");
  return element.value;
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

  if (focus === 'design' && patterns === 'good') {
    return 'css';
  }
  if (focus === 'design' && patterns === 'bad') {
    return 'css';
  }
  if (focus === 'design' && patterns === 'what') {
    return 'css';
  }
  if (focus === 'text' && patterns === 'good') {
    return 'html';
  }
  if (focus === 'text' && patterns === 'bad') {
    return 'html';
  }
  if (focus === 'text' && patterns === 'what') {
    return 'html';
  }
  if (focus === 'func' && patterns === 'good') {
    return 'javascript';
  }
  if (focus === 'func' && patterns === 'bad') {
    return 'javascript';
  }
  if (focus === 'func' && patterns === 'what') {
    return 'javascript';
  }
}

window.onload = function () {
  const form = document.querySelector('#language-questions');
  form.onsubmit = function (event) {
    event.preventDefault();
    hideResults();
  
    const results = getResults();
  
    const language = determineLanguage(results);
    
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

