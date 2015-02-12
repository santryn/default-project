# default-project
A quick starter setup that I use to kick off a simple jquery-based web app or site. The basics only- it does not include any front end frameworks or much in the way of boilerplate.

# Gruntfile.js
The included Gruntfile has the following tasks registered:

1. **Default** - runs the watch and LiveReload command. Watches for changes in SCSS files and generates CSS files. Watches for changes in JS files and concatenates/uglifies.
2. **Check** - runs JSHint and Jasmine on JS files. I haven't included any Jasmine specs in this starter template.
3. **Build** - runs concatenate, uglify, and SASS. 

Includes a simple index file and javascript/SCSS to get started with.

*Updates coming soon*:
- Mixins for SASS
- More vars for SASS
- Include sample specs/tests for Jasmine
