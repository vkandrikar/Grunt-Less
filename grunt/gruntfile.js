module.exports = function(grunt) {
	grunt.initConfig({	
		less: {
			development: {
				options: {
					paths: ["../css"],
					cleancss: false //minify the css if true
				},
				
				files: {"../css/style.css": "../css/style.less"}
			}
		},
		
		jsbeautifier: {
			//files: ["../js/main.js", "../sample1.html"] //main.js & sample.html
			//files: ["../sample1.html"] //only sample1.html
			//files: ["../*.html"] //all html files
			files: ["../*.html", "!../index.html"] //all html files except index.html			
		},
		
		uglify: {
			options: {
				//mangle: false, //prevent changes to your variable and function names
				mangle: {
					except: ['projectAuthor', 'projectVersion'] //while minify these identifiers remain untouched 
				},
				
				compress: {
					drop_console: true, //remove console
					global_defs: {
						"MY_CONSTANT": false //remove the code inside condition if condition get false
					}
				},
				
				dead_code: true,
				
				beautify: true //work like jsbeautifier, do proper alignment		
			},
			
			my_target: {
				files: {
					"../js/main.min.js": ["../js/main.js"]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-jsbeautifier');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['less', 'uglify', 'jsbeautifier']);
	//grunt.registerTask('default', ['jsbeautifier']);
};
