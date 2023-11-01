import { useState } from 'react';
import Filter from './Filter';
import Pagination from './Paggination';
import { dummyApplications } from '@/__mocks__';

interface Application {
  name: string;
  country: string;
  university: string;
  duration: string;
  cost: number;
  language: string;
}

const Home = () => {
  // eslint-disable-next-line
  const applications = dummyApplications;
  const [filters, setFilters] = useState({
    country: 'All',
    university: 'All',
    duration: '0',
    costRange: { min: 0, max: 15000 },
    language: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [sorting, setSorting] = useState({
    column: 'name',
    direction: 'asc'
  });

  const handleSort = (columnName: string) => {
    setSorting((prevSorting) => {
      if (prevSorting.column === columnName) {
        return {
          column: columnName,
          direction: prevSorting.direction === 'asc' ? 'desc' : 'asc'
        };
      } else {
        return { column: columnName, direction: 'asc' };
      }
    });
  };

  const filteredAndSortedApplications = applications
    .filter((app) => app !== undefined)
    .filter(
      (app) =>
        (filters.country === 'All' ||
          (app && app.country === filters.country)) &&
        (filters.university === 'All' ||
          (app && app.university === filters.university)) &&
        (filters.duration === '0' ||
          (app && app.duration.toString() === filters.duration)) &&
        ((app &&
          app.cost >= filters.costRange.min &&
          app.cost <= filters.costRange.max) ||
          (filters.costRange.min === 0 && filters.costRange.max === 0)) &&
        (filters.language === '' || (app && app.language === filters.language))
    )
    .sort((a, b) => {
      const column = sorting.column;
      const direction = sorting.direction === 'asc' ? 1 : -1;

      if (!a || !b) return 0;

      switch (column) {
        case 'name':
          return direction * a.name.localeCompare(b.name);
        case 'university':
          return direction * a.university.localeCompare(b.university);
        case 'country':
          return direction * a.country.localeCompare(b.country);
        case 'duration':
          return direction * (parseInt(a.duration) - parseInt(b.duration));
        case 'cost':
          return direction * (a.cost - b.cost);
        case 'applicationDeadline':
          return (
            direction *
            a.applicationDeadline.localeCompare(b.applicationDeadline)
          );
        case 'language':
          return direction * a.language.localeCompare(b.language);
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(
    filteredAndSortedApplications.length / itemsPerPage
  );

  const currentApplications = filteredAndSortedApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-full">
      <Filter
        filters={filters}
        setFilters={setFilters}
        applications={
          applications.filter((app) => app !== undefined) as Application[]
        }
      />
      <div className="w-full md:max-w-screen overflow-auto ">
        <table className=" w-full bg-white border mb-auto ">
          <thead className="bg-gray-50">
            <tr>
              <th
                onClick={() => handleSort('name')}
                className="cursor-pointer px-4 py-2 text-left"
              >
                Name
                {sorting.column === 'name' && (
                  <span>{sorting.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
              <th
                onClick={() => handleSort('university')}
                className="cursor-pointer px-4 py-2 text-left"
              >
                University
                {sorting.column === 'university' && (
                  <span>{sorting.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
              <th
                onClick={() => handleSort('country')}
                className="cursor-pointer px-4 py-2 text-left"
              >
                Country
                {sorting.column === 'country' && (
                  <span>{sorting.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
              <th
                onClick={() => handleSort('duration')}
                className="cursor-pointer px-4 py-2 text-left"
              >
                Duration
                {sorting.column === 'duration' && (
                  <span>{sorting.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
              <th
                onClick={() => handleSort('cost')}
                className="cursor-pointer px-4 py-2 text-left"
              >
                Cost
                {sorting.column === 'cost' && (
                  <span>{sorting.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
              <th
                onClick={() => handleSort('applicationDeadline')}
                className="cursor-pointer px-4 py-2 text-left"
              >
                Application Deadline
                {sorting.column === 'applicationDeadline' && (
                  <span>{sorting.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
              <th
                onClick={() => handleSort('language')}
                className="cursor-pointer px-4 py-2 text-left"
              >
                Language
                {sorting.column === 'language' && (
                  <span>{sorting.direction === 'asc' ? ' ▲' : ' ▼'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentApplications.map((app, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="px-4 py-2">{app?.name}</td>
                <td className="px-4 py-2">{app?.university}</td>
                <td className="px-4 py-2">{app?.country}</td>
                <td className="px-4 py-2">{app?.duration}</td>
                <td className="px-4 py-2">{app?.cost}</td>
                <td className="px-4 py-2">{app?.applicationDeadline}</td>
                <td className="px-4 py-2">{app?.language}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
