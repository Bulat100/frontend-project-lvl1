install: 
	npm install
publish: 
	npm publish --dry-run
lint: 
	npx eslint .
isEvenGame: 
	npx node bin/brain-even.js
calcGame: 
	npx node bin/brain-calc.js
gcdGame:
	npx node bin/brain-gcd.js
	
