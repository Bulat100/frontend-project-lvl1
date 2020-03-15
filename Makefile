install: 
	npm install
start:
	npx node games/brain-games.js
publish: 
	npm publish --dry-run
lint: 
	npx eslint .
isEvenGame: 
	npx node bin/brain-even.js
calcGame: 
	npx node bin/brain-calc.js