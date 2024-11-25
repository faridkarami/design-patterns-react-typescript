import React, { useEffect, useState } from 'react';
import { ICategory } from '../pattern/category.interface';
import categoryService from '../pattern/category.service';
import { ProductProps } from './product.props';

const Product: React.FC<ProductProps> = ({
  id,
  name,
  price,
  stock,
  categoryId,
}) => {
  const [category, setCategory] = useState<ICategory | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const fetchedCategory = await categoryService.getCategory(categoryId);
      setCategory(fetchedCategory);
    };
    fetchCategory();
  }, [categoryId]);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <h3>{name}</h3>
      <h4>{id}</h4>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      {category && (
        <>
          <h4>Category: {category.name}</h4>
          <p>{category.description}</p>
        </>
      )}
    </div>
  );
};

export default Product;
