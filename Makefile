install: 
	npm install
publish: 
	npm publish --dry-run
lint: 
	npx eslint .
isEvenGame: 
	node bin/brain-even.js
calcGame: 
	node bin/brain-calc.js
gcdGame:
	node bin/brain-gcd.js
progressionGame:
	node bin/brain-progression.js
isPrimeGame:
	node bin/brain-prime.js