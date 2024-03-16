import axios, { AxiosError, AxiosResponse } from "axios";
import { LoginRequest, UserRequest } from "../Interfaces/UserRequest";
import { SearchRequest } from "../Interfaces/SearchRequest";
import { KeyApiResponse, KeyRequest } from "../Interfaces/KeyRequest";

export interface ApiMsg {
    msg: string;
}

const instance = {
    user: axios.create({
        baseURL: process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user',
        timeout: 10000,
    }),
    activity: axios.create({
        baseURL: process.env.REACT_APP_API_ACTIVITIES ? process.env.REACT_APP_API_ACTIVITIES : 'http://localhost:3001/api/activities',
        timeout: 10000,
    }),
    local: axios.create({
        baseURL: process.env.REACT_APP_API_LOCALS ? process.env.REACT_APP_API_LOCALS : 'http://localhost:3001/api/locals',
        timeout: 10000,
    }),
    moto: axios.create({
        baseURL: process.env.REACT_APP_API_MOTOS ? process.env.REACT_APP_API_MOTOS : 'http://localhost:3001/api/motos',
        timeout: 10000,
    }),
    key: axios.create({
        baseURL: process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : 'http://localhost:3001/api/key',
    })
}

const responseBody = (response: AxiosResponse) => response.data;
const errorBody = (error: AxiosError) => error.response!.data;

//Key
interface props_keyRequest {
    generate: (id: number, body: KeyRequest) => Promise<AxiosResponse<ApiMsg>>;
    show: (id: number) => Promise<AxiosResponse<KeyApiResponse>>;
    delete: (id: number) => Promise<AxiosResponse<ApiMsg>>;
    update: (id: number, body: KeyRequest) => Promise<AxiosResponse<ApiMsg>>;
}

const keyRequest = { 
    generate: (url: string, body: KeyRequest) => instance.key.post(url, body),
    show: (url: string) => instance.key.get(url),
    delete: (url: string) => instance.key.delete(url),
    update: (url: string, body: KeyRequest) => instance.key.put(url, body)
}

export const Key_REST: props_keyRequest = {
    delete: (id: number): Promise<AxiosResponse<ApiMsg>> => keyRequest.delete(`/delete-key/${id}`),
    generate: (id: number, body: KeyRequest): Promise<AxiosResponse<ApiMsg>> => keyRequest.generate(`/generate-key/${id}`, body),
    show: (id: number): Promise<AxiosResponse<KeyApiResponse>> => keyRequest.show(`/show-key/${id}`),
    update: (id: number, body: KeyRequest): Promise<AxiosResponse<ApiMsg>> => keyRequest.update(`/change-key/${id}`, body)
}

//User
interface props_userRequest {
    login: (url: string) => Promise<any>
    register: (url: string, body: UserRequest) => Promise<any>
    postUser: (id: number, user: UserRequest) => Promise<any>
    getUsers: (url: string) => Promise<any>
    editUser: (url: string, body: UserRequest) => Promise<any>
    deleteUser: (id: number) => Promise<any>
}

const userRequest = {
    login: (url: string) => instance.user.get<LoginRequest>(url).then(responseBody).catch(errorBody),
    register: (url: string, body: UserRequest) => instance.user.post<UserRequest>(url, body).then(responseBody).catch(errorBody),
    postUser: (url: string, user: UserRequest) => instance.user.post<UserRequest>(url, user).then(responseBody).catch(errorBody),
    getUsers: (url: string) => instance.user.get<SearchRequest>(url).then(responseBody).catch(errorBody),
    editUser: (url: string, body: UserRequest) => instance.user.put<UserRequest>(url, body).then(responseBody).catch(errorBody),
    deleteUser: (url: string) => instance.user.delete<UserRequest>(url).then(responseBody).catch(errorBody)
}

export const User_REST: props_userRequest = {
    login: (query: string): Promise<LoginRequest> => userRequest.getUsers(`/login/${query}`),
    register: (url: string, body: UserRequest): Promise<UserRequest> => userRequest.register(url, { ...body }),
    deleteUser: (id: number): Promise<any> => userRequest.deleteUser(`/delete/${id}`),
    editUser: (url: string, body: UserRequest): Promise<UserRequest> => userRequest.editUser(url, { ...body }),
    getUsers: (url: string): Promise<UserRequest> => userRequest.getUsers(url),
    postUser: (id: number, body: UserRequest): Promise<UserRequest> => userRequest.postUser(`/post-user/${id}`, body)
}

/*
const bookRequests = {
    get: (url: string) => instance.get<Book>(url).then(responseBody),
    post: (url: string, body: Book) => instance.post<Book>(url, body).then(responseBody),
    delete: (url: string) => instance.delete<Book>(url).then(responseBody),
};

export const Books = {
    getBooks: (): Promise<Book[]> => bookRequests.get('/books'),
    getSingleBook: (isbn: string): Promise<Book> => bookRequests.get(`/books/${isbn}`),
    addBook: (book: Book): Promise<Book> => bookRequests.post(`/books`, book),
    deleteBook: (isbn: string): Promise<Book> => bookRequests.delete(`/books/${isbn}`)
}

const [books, setBooks] = React.useState<Book[]>([]);
Books.getPosts()
    .then((data) => {
        setBooks(data);
    })
    .catch((err) => {
        console.log(err);
    }); */