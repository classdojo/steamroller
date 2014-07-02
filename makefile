ALL_TESTS = $(shell find ./test/unit ./test/e2e -name "*-test.js")
REPORTER = dot
ONLY = "."
TIMEOUT=100

test-watch:
	./node_modules/.bin/_mocha $(ALL_TESTS) --timeout $(TIMEOUT) --ignore-leaks --bail --reporter $(REPORTER) -g $(ONLY) --watch ./test ./lib

browser:
	./node_modules/.bin/browserify . | ./node_modules/.bin/uglifyjs > streamroller.js