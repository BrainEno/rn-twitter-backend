import { Request, Response } from "express";
import { Session } from "express-session";

export interface MySession extends Session {
  userId: string | number;
}

export interface MyContext {
  req: Request;
  res: Response;
}
