interface PagProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (num: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PagProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-[100%] mb-4 mt-auto">
      <ul className="flex wrap justify-center gap-4 mt-4">
        {pageNumbers.map((number) => (
          <li
            onClick={() => onPageChange(number)}
            key={number}
            className={
              number === currentPage
                ? 'bg-slate-500 rounded-md justify-center flex items-center w-10 h-10 cursor-pointer'
                : 'bg-slate-100 rounded-md justify-center flex items-center w-10 h-10 cursor-pointer'
            }
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
