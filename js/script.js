function rysujChoinke(height) {
	for (n = 1; n <= height; n++) {
		var star = '';
		
		for (i= n * 2 - 1; i > 0; i--) {
			star += "*";
		}
		
		console.log(star)
	}
}
rysujChoinke(5);
