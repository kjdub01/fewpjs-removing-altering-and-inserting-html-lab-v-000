main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');
newHeader.innerHtml = `${name} is the champion`
newHeader.apendChild(body);