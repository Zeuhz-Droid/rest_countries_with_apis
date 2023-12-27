export async function getCountries() {
  const res = await fetch(
    `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`
  );

  if (!res.ok) throw new Error("Failed getting Countries");

  const data = await res.json();

  return data;
}

export async function getCountry(country) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${country}?fields=name,flags,population,region,subregion,currencies,capital,languages,tld,borders`
  );

  if (!res.ok) throw new Error("Failed getting Country");

  const data = await res.json();

  return data;
}

// JUST TRYING
// if (!data[0].languages) return data;

// const langs = data[0].languages;

// const urls = [];

// for (let lang in langs) {
//   if (langs.hasOwnProperty(lang)) {
//     const value = langs[lang];
//     console.log(value);
//     urls.push(`https://restcountries.com/v3.1/lang/${value}?fields=borders`);
//   }
// }

// Promise.all(
//   urls.map(async (url) => {
//     const res = await fetch(url);
//     const dataLang = await res.json();
//     return dataLang;
//   })
// )
//   .then((dataCountries) => {
//     // Save the results to an object
//     const results = dataCountries.filter((borders) =>
//       borders.some((border) => data.includes(border))
//     );

//     console.log(results);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// for (let border in borderCountries) {
//   if (borderCountries.hasOwnProperty(border)) {
//     const value = borderCountries[border];
//     urls.push(`https://restcountries.com/v3.1/lang/${value}?fields=name`);
//   }
// }

// borderCountries.map((border) => {
//   urls.push(`https://restcountries.com/v3.1/lang/${border}?fields=name`);
// });

// Promise.all(
//   urls.map(async (url) => {
//     const res = await fetch(url);
//     const dataLang = await res.json();
//     return dataLang;
//   })
// )
//   .then((langs) => {
//     // Save the results to an object
//     console.log(langs);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
