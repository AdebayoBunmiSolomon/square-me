import { useState } from "react";

export const useSearchFilter = (data: any[]) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredData, setFilteredData] = useState<any[]>(data);

  const filterDataBySearchString = (dataKey: any) => {
    if (searchValue) {
      if (data && data.length > 0) {
        const filteredDataBySearchValue =
          data &&
          data.filter((item) =>
            item[dataKey].toLowerCase().includes(searchValue.toLowerCase())
          );
        setFilteredData(filteredDataBySearchValue);
      } else {
        setFilteredData(data);
      }
    } else {
      setFilteredData(data);
    }
  };

  return {
    filterDataBySearchString,
    searchValue,
    setSearchValue,
    filteredData,
    setFilteredData,
  };
};
