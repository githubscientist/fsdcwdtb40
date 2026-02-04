var getVowelsCount;
getVowelsCount = function (inputString) {
    var vowels = 0;
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var ch = inputString_1[_i];
        switch (ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels++;
                break;
        }
    }
    return vowels;
};

// export, so that it will be available globally within this workspace and any other files can import to use it.
module.exports = getVowelsCount;