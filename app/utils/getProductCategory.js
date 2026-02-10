
const getProductCategory = async (categoryData) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products/${categoryData}`, {
      next: {
       revalidate: 0,
      }
      });
    if (!response.ok) {
        console.error(`Failed to fetch data: ${response.status}`);
        return [];
    }
    
    return response.json();
}
export default getProductCategory;