#
# Vars
#

BIN = ./node_modules/.bin
.DEFAULT_GOAL := all

#
# Tasks
#

node_modules: package.json
	@npm install
	@touch node_modules

test: node_modules
	@${BIN}/mochify --transform babelify --phantomjs ./node_modules/.bin/phantomjs --ui bdd

validate: node_modules
	@${BIN}/standard

all: validate test

.PHONY: test validate
