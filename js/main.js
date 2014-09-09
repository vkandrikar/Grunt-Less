// JavaScript Document

$(document).ready( function ( evt ) {
	var projectVersion = "1.0.1";
	var projectKey = "abc123";
	var projectAuthor = "vijayka";
	const MY_CONSTANT = "pro";
	
	console.log(projectVersion + "---" + projectKey + "---" + projectAuthor);
	
	var topSection = $( "section" ).filter( ".topSection" );
    topSection.css( 'text-decoration', 'underline' );
	
	topSection.find('p').html(projectVersion + "---" + projectKey + "---" + projectAuthor);

	//in html use main.js & check
	//grunt 
	//now use main.min.js & check
	if (MY_CONSTANT == "dev") {		
		topSection.animate({
			opacity: '0.2'
		}, 1000);
	}
	
    function onComplete ( obj ) {
        console.log( obj );
        obj.animate( {
            opacity: '0.5'
        }, 1000 );
    }
	
    $( '.bottomSection' ).animate({
        width: '50%'
    }, 1000, function () {
        onComplete( $(this) )
    });
});
