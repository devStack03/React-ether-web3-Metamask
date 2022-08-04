import IUser from "../types/user.type";
import Http from "./http-common";
class UserService {
    apiUrl = '/users';
    
    getAll() {
        return Http.get<Array<IUser>>(this.apiUrl)
    }

    create(data: any) {
        return Http.post<IUser>(this.apiUrl, data);
    }

    getById(id: any) {
        return Http.get<IUser>(this.apiUrl + `/${id}`);
    }
}

export default new UserService();