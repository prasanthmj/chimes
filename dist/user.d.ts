import Connection from "./connection";
import { RemoteConnection } from './request';
import Service from "./service";
declare type ServiceEndPoints = {
    [name: string]: string;
};
export declare type TokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    expires_at: number;
    refresh_token: string;
};
export declare type UserInfo = {
    id: "";
    first_name: string;
    last_name: string;
    email: string;
    avatar_url: string;
    email_confirmed: boolean;
    paid_user: boolean;
    endpoints: ServiceEndPoints;
};
export default class User implements RemoteConnection {
    private connection;
    private token;
    info: UserInfo;
    constructor(connection: Connection, token: TokenResponse);
    private processTokenResponse;
    saveSession(): void;
    static clearSession(): void;
    static loadFromStorage(connection: Connection): User | null;
    getJWTAccessToken(): Promise<string>;
    loadUserData(): Promise<UserInfo>;
    request(path: string, data?: any): Promise<any>;
    updatePassword(old: string, newPwd: string): Promise<any>;
    saveProfileField(field_name: string, value: string): Promise<any>;
    resendConfirmationEmail(): Promise<any>;
    private renewRefreshToken;
    createService(name: string): Service | null;
}
export {};
