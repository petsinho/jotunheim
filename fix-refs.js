const fs = require('fs');
//FIXME: fix this in AWS
let htmlContent = fs.readFileSync('./build/index.html', 'utf8');
htmlContent = htmlContent.replace('src="/static/js', 'src="./static/js');
htmlContent = htmlContent.replace('href="/favicon.ico', 'href="./favicon.ico');
htmlContent = htmlContent.replace('href="/manifest.json', 'href="/manifest.json');
htmlContent = htmlContent.replace('href="/static/css/', 'href="./static/css/');
fs.writeFileSync('./build/index.html', htmlContent);
