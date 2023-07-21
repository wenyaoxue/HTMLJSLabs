// function isLet(char) {
//     return char.toLowerCase() != char.toUpperCase()
// }
// function dateValidate(field) {
//     if (field.value.length==11 &&
//         !isNaN(field.value[0]) && !isNaN(field.value[1])) {
//         let dd = parseInt(field.value.substring(0,2))
//         if (0 < dd && dd < 32 && field.value[2]=='-' && field.value
//             return true
//     }
//     return false
// }

function dateValidate(field) {
    let text = field.value
    if (text.length==11) {
        let pattern = /\d{2}-[a-zA-Z]{3}-\d{4}/
        if (pattern.test(text)) {
            let mos = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
            if (mos.includes(field.value.substring(3,6).toUpperCase()))
                return true
        }

    }
    return false

}