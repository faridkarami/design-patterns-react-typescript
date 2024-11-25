import Product from './Product/Product';

const FlyweightDesignPattern = () => {
  const products = [
    { id: '1', name: 'Laptop', price: 1200, stock: 5, categoryId: '101' },
    { id: '2', name: 'Mouse', price: 25, stock: 50, categoryId: '102' },
    { id: '3', name: 'Keyboard', price: 45, stock: 30, categoryId: '102' },
    { id: '4', name: 'Monitor', price: 200, stock: 10, categoryId: '101' },
  ];

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          stock={product.stock}
          categoryId={product.categoryId}
        />
      ))}
    </div>
  );
};

export default FlyweightDesignPattern;
