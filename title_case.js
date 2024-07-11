function toTitleCase(title) {
    var str = title.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    var lowers = [
        'A', 'An', 'The', 'And', 'But', 'Or', 'Nor', 'For', 'Yet', 'As', 'At', 
        'By', 'For', 'In', 'Of', 'On', 'To', 'Versus', 'Vs', 'Vs.', 'V', 'V.', 
        'N', "'N", "N'", "'N'", "O'", 'O'
    ];

    for (var i = 0, j = lowers.length; i < j; i++) {
        str = str.replace(new RegExp('\\b' + lowers[i] + '\\b', 'ig'), function(match) {
            return lowers[i].toLowerCase();
        });
    }
    console.log(str)
    str = str.replace(/\b([ivxlcdm]+)\b|\((\w)|\n(\w)/ig, function(match, romanNumeral, p1, p2) {
        if (romanNumeral) {
            return romanNumeral.toUpperCase();
        } else if (p1) {
            return '(' + p1.toUpperCase();
        } else if (p2) {
            return '\n' + p2.toUpperCase();
        }
    });
    return str
}