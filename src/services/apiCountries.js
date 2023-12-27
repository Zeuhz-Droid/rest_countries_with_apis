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
    `https://restcountries.com/v3.1/name/${country}?fields=name,flags,population,region,subregion,currencies,capital,languages,tld`
  );

  if (!res.ok) throw new Error("Failed getting Country");

  const data = await res.json();
  return data;
}

// export async function getCountryBy(country) {
//   const regions = ["Africa", "Europe", "Asia", "America", "Oceania"];

//   let res;

//   res = await fetch(`https://restcountries.com/v3.1/region/${region}`);

//   res = await fetch(
//     `https://restcountries.com/v3.1/name/${country}?fields=name,flags,population,region,capital`
//   );

//   if (!res.ok) throw new Error("Failed getting Country.");

//   const data = await res.json();

//   console.log(data);
//   return data;
// }
