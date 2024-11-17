import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <div className='w-full flex justify-center items-center border fixed bottom-0 bg-white'>
        <div className="flex justify-between w-11/12 max-w-[550px] py-2">
        <div className='flex gap-2'>
            {page > 1 && (
                    <button
                    onClick={() => handlePageChange(page - 1)}
                    className="rounded-md border px-2 py-1"
                    >
                    Previous
                    </button>
                )}
                {page < totalPages && (
                    <button
                    onClick={() => handlePageChange(page + 1)}
                    className="rounded-md border px-2 py-1"
                    >
                    Next
                    </button>
                )}
            </div>
                

            <p className="font-bold text-sm">
                Page {page} of {totalPages}
            </p>
        
        </div>
    </div>
    
  );
}

export default Pagination;
