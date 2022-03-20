import httpRequest from './http.service';

class AuthService {
    async login(payload: ILoginData): Promise<IAuthUser> {
        const { data } = await httpRequest.post('/auth/login', payload);
        return data;
    }
}
export default new AuthService();