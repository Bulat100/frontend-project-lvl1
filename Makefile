install: 
	npm install
start:
	npx node brain-games.js
publish: 
	npm publish --dry-run
lint: 
	npx eslint .
gamestart: 
	npx node brain-even.js