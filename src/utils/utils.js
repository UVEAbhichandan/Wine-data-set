export const dataParser = (json) => JSON.parse(JSON.stringify(json));

export function alcholSorter(data) {
    if (!data) {
        return;
    }
    const alchols = {};
    data?.forEach((item) => {
        if (alchols.hasOwnProperty(item.Alcohol)) {
            alchols[item.Alcohol].push(item);
            return;
        }
        alchols[item.Alcohol] = [item];
    });
    return alchols;
}

export function meanCalculator(data) {
    if (!data) {
        return;
    }
    const sum = data.reduce((acc, cur) => acc + Number(cur) , 0);
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
    data?.sort((a, b) => a - b);
    const n = data.length;

    const isEven = n % 2 === 0;

    let mid = Math.floor(n/2);

    if (isEven) {
        return ((data[mid] + data[mid-1]) / 2).toFixed(3);
    }
    return (data[mid])?.toFixed(3);
}

export const createTable = (alcohols, type) =>{

    const mean = [];
    const median = [];
    const mode = [];

    if (Object.keys(alcohols)?.length) {
      Object.keys(alcohols).forEach((item) => {
        mean.push(meanCalculator(alcohols[item].map((v) => type === "Gamma" ?  ((v.Ash * v.Hue) / v.Magnesium) : v.Flavanoids)));
        median.push(medianCalculator(alcohols[item].map((v) => type === "Gamma" ? ((v.Ash * v.Hue) / v.Magnesium) : v.Flavanoids)));
      })
    }
      mean.forEach((item, i) => {
        mode.push(modeCalculator(item, median[i]));
      })
     return{
          mean: mean,
          median: median,
          mode: mode
        };

  }
