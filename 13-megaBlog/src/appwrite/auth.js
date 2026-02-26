import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const result = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });

      if (result) {
        // return result;
        return this.login({ email, password }); // => login
      } else {
        throw new Error("Auth service :: error : Account not created.");
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const result = await this.account.createEmailPasswordSession({
        email,
        password,
      });

      if (result) {
        return result;
      } else {
        throw new Error("Auth service :: error : Couldn't login");
      }
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      const result = await this.account.deleteSessions();
      if (result) {
        return result;
      } else {
        throw new Error("Auth service :: error : Error when deleting sessions");
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
