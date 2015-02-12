module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 1. JSHint - for JS file validation
        jshint: {
            options: {
                // Use jshint-stylish to make errors look nice
                reporter: require('jshint-stylish'),
                globals: {
                    jQuery: true
                }
            },

            // Lint Gruntfile and all JS files in SRC JS folder
            build: ['Gruntfile.js', 'src/js/*.js']
        },

        // 2. Concat
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/js/main1.js', 'src/js/main2.js'],
                dest: 'src/js/concat/main.js',
            },
        },


        // 2. Uglify - Minify js files
        uglify: {
            options: {
                // Set a banner - package name + today's date
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    // Build all JS files to dist folder
                    'dist/js/main.min.js': 'src/js/concat/main.js'
                }
            }
        },

        // 3. SASS
        sass: {
           
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/css/style.css': 'src/scss/style.scss'
                }
            }
        },

        // 4. Watch with LiveReload
        watch: {

            options: {
                livereload: true
            },

            grunt: {
                files: ['Gruntfile.js','src/**/*.*','dist/index.html']
            }, 

            sass: {
                files: 'src/scss/*.scss',
                tasks: ['sass']
            },


            concat: {
                files: ['src/js/main1.js', 'src/js/main2.js'],
                tasks: ['concat']
            },

            uglify: {
                files: 'src/js/**/*.js',
                tasks: ['uglify']
            },


        },
        // 5. JS Unit Testing with Jasmine
        jasmine: {
            pivotal: {
                src: 'src/**/*.js',
                options: {
                    specs: 'src/spec/*Spec.js',
                    helpers: 'src/spec/*Helper.js',
                    vendor: 'dist/js/jquery.min.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Tasks
    // 1. Build
    // Generate CSS and minify JS
    grunt.registerTask('build', ['sass', 'concat', 'uglify']);

    // 2. Default: Watch
    grunt.registerTask('default', ['watch']);


    // 3. Test - run jshint and jasmine
    grunt.registerTask('check', ['jshint','jasmine']);
};
