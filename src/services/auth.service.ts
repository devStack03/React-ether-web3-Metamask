import IUser from "../types/user.type";
import Http from "./http-common";
class AuthService {
    apiUrl = '/auth';
    
    login(data: any) {
        return Http.post<IUser>(this.apiUrl + '/login', data);
    }

    create(data: any) {
        return Http.post<IUser>(this.apiUrl, data);
    }
}

export default new AuthService();