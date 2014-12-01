// Lämmittely funktio
function helloWorld() {
	return "hello world!";
}

// Yksi osa yhtä tehävä mitä tein toiselle kurssille
function calculateBMI(weight, height) {
	bmi = (weight/(height*2)*100);
	bmi = bmi.toFixed(1);
	return bmi;
}

// Pieni osa oma projektia. Funktiota muutettu, että testi toimii
function untilReserved(startHours, startMinutes, hours, minutes) {
		freeHours =  startHours - hours;
		console.log(freeHours);
		freeMinutes =  60 - (minutes - startMinutes);
		console.log(freeMinutes);
		if(freeMinutes > 0) {
			freeHours -= 1;
			if (freeMinutes == 60) {
				freeMinutes = 0;
				freeHours += 1;
			}
		}
		// testia varten
		if (freeHours != 0) {
			freeMinutes += (60 * freeHours);
		}
		if(freeMinutes < 0) {
			freeMinutes = "Free for the day!";
		}

		return freeMinutes;
}

// Toinen osa omasta projektistani. Funktiota muutettu, että testi toimii
function isFree(startHours, startMinutes, endHours, endMinutes, hours, minutes) {
		if(startHours <= hours && endHours >= hours) {
			if(startMinutes <= minutes && endMinutes >= minutes) {
				return false;
			}
		}
		return true;
	}