(function() {


	var state = 0;


	$("label").click(function(){

		if (state == 0) {

		var passwords = [
		"Lol", "<3", "<3", "abc", "galle", "password",
		"$$", "L0L", "$", "^^", ")", "<3", "666", "1234", 
		"f0r3ver", "2014", "1212", "tom", "forever", "whatever",
		"c00l", ":)", ":-)", "€", "2001", "love", "cute", "hey",
		"2C00L", "woot", "$", "%%", "@", "5678", "-",
		"2cool4u", "999", "(:", "bye", "lolilol", "<3", "666", "_",
		"128", "1984" 
		];

		var tomGalle = [ "tom", "galle"];

		var word1 = passwords[Math.floor(Math.random()*passwords.length-0.001)];
		var word2 = tomGalle[Math.floor(Math.random()*tomGalle.length-0.001)];
		var word3 = tomGalle[Math.floor(Math.random()*tomGalle.length-0.001)];
		var word4 = passwords[Math.floor(Math.random()*passwords.length-0.001)];


		console.log(word1 + word2 + word3 + word4);
		var result = word1 + word2 + word3 + word4;


		
		$('#input').val($('#input').val() + result);
		state = 1;

		}


		else {
			
			$("#input").val('');

			var passwords = [
			"Lol", "<3", "<3", "abc", "galle", "password",
			"$$", "L0L", "$", "^^", ")", "<3", "666", "1234", 
			"f0r3ver", "2014", "1212", "tom", "forever", "whatever",
			"c00l", ":)", ":-)", "€", "2001", "love", "cute", "hey",
			"2C00L", "woot", "$", "%%", "@", "5678", "-",
			"2cool4u", "999", "(:", "bye", "lolilol", "<3", "666", "_",
			"128", "1984" 
			];

			var tomGalle = [ "tom", "galle"];

			var word1 = passwords[Math.floor(Math.random()*passwords.length-0.001)];
			var word2 = tomGalle[Math.floor(Math.random()*tomGalle.length-0.001)];
			var word3 = tomGalle[Math.floor(Math.random()*tomGalle.length-0.001)];
			var word4 = passwords[Math.floor(Math.random()*passwords.length-0.001)];


			console.log(word1 + word2 + word3 + word4);
			var result = word1 + word2 + word3 + word4;
			
		
			$('#input').val($('#input').val() + result);
			state = 1;


		}

	});






})();
