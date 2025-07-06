import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const { result, isError, isLoading, filterdCountries, setfilterdCountries } =
    useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Something went wrong" />}
      {isLoading && <ShowMessage message="Loading countries data...! " />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setfilterdCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setfilterdCountries}
            />
          </div>
          <CountryList data={filterdCountries} />
        </>
      )}
    </>
  );
};

export default Home;
