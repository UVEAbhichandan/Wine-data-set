export const dataParser = (json) => JSON.parse(JSON.stringify(json));

export function alcholSorter(data) {
    if (!data) {
        return;
    }
    const alchols = {};
    data?.forEach((item) => {
        if (alchols.hasOwnProperty(item.Alcohol)) {
            alchols[item.Alcohol].push(item);
            return
        }
        alchols[item.Alcohol] = [item];
    });
    return alchols;
}

export function meanCalculator(data) {
    if (!data) {
        return;
    }
    const sum = data.reduce((acc, cur) => acc + Number(cur.Flavanoids) , 0);
    const mean = sum / data.length;
    return mean.toFixed(3);
}

export function modeCalculator(mean, median) {
    return (3 * median - 2 * mean).toFixed(3);
}

export function medianCalculator(data) {
    if (!data) {
        return;
    }
    data?.sort((a, b) => a.Flavanoids - b.Flavanoids)
    const n = data.length;
    const isEven = n % 2 === 0;
    let mid = Math.floor(n/2);
    if (isEven) {
        return ((data[mid].Flavanoids + data[mid-1].Flavanoids) / 2).toFixed(3)
    }
    return (data[mid].Flavanoids).toFixed(3);
}