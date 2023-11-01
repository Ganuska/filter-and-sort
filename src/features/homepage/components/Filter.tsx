import React from 'react';

interface Filter {
  country: string;
  university: string;
  duration: string;
  costRange: {
    min: number;
    max: number;
  };
  language: string;
}

interface FilterProps {
  filters: Filter;
  setFilters: React.Dispatch<React.SetStateAction<Filter>>;
  applications: Application[];
}

interface Application {
  name: string;
  country: string;
  university: string;
  duration: string;
  cost: number;
  language: string;
}

const Filter: React.FC<FilterProps> = ({
  filters,
  setFilters,
  applications
}) => {
  const uniqueCountries = Array.from(
    new Set(applications?.map((app) => app.country))
  );
  const uniqueUniversities = Array.from(
    new Set(applications?.map((app) => app.university))
  );
  const uniqueLang = Array.from(
    new Set(applications?.map((app) => app.language))
  );
  const uniqueDuration = Array.from(
    new Set(applications?.map((app) => app.duration))
  );

  const resetFilters = () => {
    const defaultFilters: Filter = {
      country: 'All',
      university: 'All',
      duration: '0',
      costRange: { min: 0, max: 15000 },
      language: ''
    };
    setFilters(defaultFilters);
  };
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFilters((prevFilters: Filter) => {
      if (name === 'min' || name === 'max') {
        const newCostRange = {
          ...prevFilters.costRange,
          [name]: parseInt(value)
        };

        const filteredApplications = applications?.filter((app) => {
          if (app.cost > newCostRange.min && app.cost < newCostRange.max)
            return app;
        });

        return {
          ...prevFilters,
          costRange: { ...prevFilters.costRange, ...newCostRange },
          applications: filteredApplications
        };
      } else {
        return {
          ...prevFilters,
          [name]: value
        };
      }
    });
  };

  return (
    <div className="flex-wrap p-4 bg-gray-100 rounded-lg flex  md:flex-col md: gap-2 md:items-center w-[100%] justify-center">
      <div>
        <label className="md:flex-col md:items-center justify-center md:flex">
          Country:
          <select
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
            className="ml-2 p-1 md:flex md:flex-col"
          >
            <option value="All">All</option>
            {uniqueCountries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label className="md:flex-col md:items-center justify-center md:flex">
          University:
          <select
            name="university"
            value={filters.university}
            onChange={handleFilterChange}
            className="ml-2 p-1 md:flex md:flex-col md:items-center"
          >
            <option value="All">All</option>
            {uniqueUniversities.map((university) => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Duration:
          <select
            name="duration"
            value={filters.duration}
            onChange={handleFilterChange}
            className="ml-2 p-1 md:flex md:flex-col md:items-center"
          >
            <option value="0">All</option>
            {uniqueDuration.map((duration) => (
              <option key={duration} value={duration}>
                {duration} Years
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label className="flex gap-2 md:flex-col md:items-center justify-center md:flex">
          Cost Range:
          <input
            type="number"
            name="min"
            value={filters.costRange.min}
            onChange={handleFilterChange}
            placeholder="Min"
            className="ml-2 p-1 max-w-[200px] bg-gray-200"
          />
          <input
            type="number"
            name="max"
            value={filters.costRange.max}
            onChange={handleFilterChange}
            placeholder="Max"
            className="ml-2 p-1 max-w-[200px] bg-gray-200 "
          />
        </label>
      </div>
      <div>
        <label className="md:flex-col md:items-center justify-center md:flex">
          Language:
        </label>
        <select
          name="language"
          value={filters.language}
          onChange={handleFilterChange}
          className="ml-2 p-1"
          multiple={false}
        >
          <option value="">All</option>
          {uniqueLang.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <button
        className="bg-blue-500 disabled:bg-blue-300 text-white font-semibold py-2 px-4 rounded "
        onClick={resetFilters}
      >
        Reset all filters
      </button>
    </div>
  );
};

export default Filter;
