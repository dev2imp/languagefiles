fetch('https://raw.githubusercontent.com/dev2imp/languagefiles/refs/heads/main/kuen.txt')
  .then(response => response.text())
  .then(data => console.log(data));
