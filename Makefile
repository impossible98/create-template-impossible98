.POSIX:
SHELL := /bin/bash
PNPM :=  $(shell which pnpm)
# Build the application
.PHONY: build
build:
	@echo -e "\033[32mBuilding the application...\033[0m"
	$(PNPM) run build
	@echo -e "\033[32mBuild finished.\033[0m"
# Local development
dev:
	$(PNPM) run dev
# Install dependencies
install:
	@echo -e "\033[32mInstalling dependencies...\033[0m"
	$(PNPM) install
	@echo -e "\033[32mDependencies installed.\033[0m"
# Start the application
start: build
	$(PNPM) run start
