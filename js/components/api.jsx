function productsData(){
  const link = 'https://www.peruwianskiedary.pl/categories/products';
  return fetch(link)
  .then(resp => resp.json())
}

export default productsData();
