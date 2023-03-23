export const buildQueryParams = (obj) => {
    const len = Object.keys(obj).length;
    let counter = 0;
    const arr = [];
    let str = '';

    if (len === 0) {
        console.log(str);
        return str;
    } else {
        for (let key in obj) {
            counter++;
            arr.push(`${counter === 1 ? '?' : ''}_${key}=${obj[key]}${counter !== len ? '&' : ''}`);
            str = str + `${counter === 1 ? '?' : ''}_${key}=${obj[key]}${counter !== len ? '&' : ''}`;
        }
    }

    console.log(str);

    return str;
};

// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key}: ${value}`);
// }
