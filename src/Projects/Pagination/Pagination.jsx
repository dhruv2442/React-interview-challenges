import React, { useEffect, useState } from 'react';
import './Pagination.css';

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 10));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (pageNo) => {
    if (pageNo >= 1 && pageNo <= totalPages && pageNo != page) setPage(pageNo);
  };
  return (
    <div>
      {products.length > 0 && (
        <div className='products'>
          {products.map((product) => {
            return (
              <span key={product.id} className='products__single'>
                <img src={product.thumbnail} alt={product.title} srcset='' />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className='pagination'>
          <span
            className={page > 1 ? '' : 'pagination__disabled'}
            onClick={() => selectPageHandler(page - 1)}
          >
            ◀️
          </span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? 'pagination__selected' : ''}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            className={page < totalPages ? '' : 'pagination__disabled'}
            onClick={() => selectPageHandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
