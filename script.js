function eat_cake(str) {
    //Instance variables (localizing)
    var setOne;
    var setTwo;
    var count = 1;
    var repeat;
    var error;
    var l = str.length;

    if (l > 1) {
        repeat = true;
        var charOne = str.substring(0, 1);

    }
    for (var i = 1; i < l + 1; i++) {
        if (charOne !== str.substring(i - 1, i)) {
            repeat = false;
        }
    }
    if (repeat == true) {
        //If true, sets count to the string length
        count = l;
    }

    for (var a = l - 1; a > 0; a--) {
        //Remained of length/variable
        if (l % a == 0) {
            //finds the precise end and beginning of substring
            setOne = str.substring(0, l / a);
            //finds the precise end and beginning of substring
            setTwo = str.substring(l / a, l / a + setOne.length);

            if (setOne == setTwo && count < a) {
                error = false;

                for (var x = 1; x < l / a + 1; x++) {
                    setOne = setTwo;
                    //finds the precise end and beginning of substring
                    setTwo = str.substring(x * l / a, x * l / a + setOne.length);

                    if (setOne !== setTwo && setTwo.length > 0) {
                        //Does not add to count b/c does not match
                        error = true;
                    }
                }
                //No error, count needs to be set
                if (!error) {
                    //Sets count to variable
                    count = a;
                }
            }
        }
    }
    //Returns final count
    return count;
}