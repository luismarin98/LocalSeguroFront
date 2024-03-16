import axios, { AxiosError, AxiosResponse } from "axios";
import { LoginRequest, UserRequest } from "../Interfaces/UserRequest";
import { SearchRequest } from "../Interfaces/SearchRequest";

const instance = {
    user: axios.create({
        baseURL: process.env.REACT_APP_API_USERS ? process.env.REACT_APP_API_USERS : 'http://localhost:3001/api/user',
        timeout: 10000,
    }),
    activity: axios.create({
        baseURL: process.env.REACT_APP_API_ACTIVITIES,
        timeout: 10000,
    }),
    local: axios.create({
        baseURL: process.env.REACT_APP_API_LOCALS,
        timeout: 10000,
    }),
    moto: axios.create({
        baseURL: process.env.REACT_APP_API_MOTOS,
        timeout: 10000,
    }),
}

const responseBody = (response: AxiosResponse) => response.data;
const errorBody = (error: AxiosError) => error.response;

interface props_userRequest {
    login: (url: string) => Promise<any>
    register: (url: string, body: UserRequest) => Promise<any>
    postUser: (url: string, user: UserRequest) => Promise<any>
    getUsers: (url: string) => Promise<any>
    editUser: (url: string, body: UserRequest) => Promise<any>
    deleteUser: (url: string) => Promise<any>
}

const userRequest = {
    login: (url: string) => instance.user.get<LoginRequest>(url).then(responseBody).catch(errorBody),
    register: (url: string, body: UserRequest) => instance.user.post<UserRequest>(url, body).then(responseBody).catch(errorBody),
    postUser: (url: string, user: UserRequest) => instance.user.post<UserRequest>(url, user).then(responseBody).catch(errorBody),
    getUsers: (url: string) => instance.user.get<SearchRequest>(url).then(responseBody).catch(errorBody),
    editUser: (url: string, body: UserRequest) => instance.user.put<UserRequest>(url, body).then(responseBody).catch(errorBody),
    deleteUser: (url: string) => instance.user.delete<UserRequest>(url).then(responseBody).catch(errorBody)
}

export const User: props_userRequest = {
    login: (query: string): Promise<LoginRequest> => userRequest.getUsers(`/login/${query}`),
    register: (url: string, body: UserRequest): Promise<UserRequest> => userRequest.register(url, { ...body }),
    deleteUser: (url: string): Promise<any> => userRequest.deleteUser(url),
    editUser: (url: string, body: UserRequest): Promise<UserRequest> => userRequest.editUser(url, { ...body }),
    getUsers: (url: string): Promise<UserRequest> => userRequest.getUsers(url),
    postUser: (url: string, body: UserRequest): Promise<UserRequest> => userRequest.postUser(url, body)
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