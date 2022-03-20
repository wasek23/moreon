import httpRequest from './http.service';

class ProductService {
    async getAllProducts(): Promise<IProduct[]> {
        const { data } = await httpRequest.get('/product');
        return data;
    }
    async getProductDetailsById(id: string): Promise<IProduct> {
        const { data } = await httpRequest.get('/product/' + id);
        return data;
    }
}
export default new ProductService();