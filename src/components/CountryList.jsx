import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

const CountryList = ({ data}) => {
  return (
    <div className="mx-auto mt-8 grid justify-center gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(3,minmax(0,_auto))]   lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((country) => {
          return (
            <CountryCard
              key={country.official_name}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag.large}
            />
          );
        })
      ) : (
        <>
          <EmptySearch />
        </>
      )}
    </div>
  );
};

export default CountryList;