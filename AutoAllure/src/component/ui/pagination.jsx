// https://auto-allure.com:2053/cars_id/v2?id=${carId}&group=${type}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function carPagination({ url }) {


    return (
      <>
             <div className="pagination">
                    <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                        Previous Page
                    </button>
                    <span>{currentPage}</span>
                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === Math.ceil(items.Test.length / itemsPerPage)}
                    >
                        Next Page
                    </button>
                </div>
      </>
    );
  
}

export default carBook;
