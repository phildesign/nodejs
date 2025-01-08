import { Request, Response, NextFunction } from 'express';
import { IMiddleWare } from './middleware.interface';
import { verify } from 'jsonwebtoken';

interface JwtPayload {
	email: string;
}

function isJwtPayload(payload: any): payload is JwtPayload {
	return payload && typeof payload === 'object' && 'email' in payload;
}

export class AuthMiddleware implements IMiddleWare {
	constructor(private secret: string) {}

	execute(req: Request, res: Response, next: NextFunction): void {
		const authHeader = req.headers.authorization;
		if (authHeader) {
			const token = authHeader.split(' ')[1];
			verify(token, this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (isJwtPayload(payload)) {
					req.user = payload.email;
					next();
				}
			});
		}
		next();
	}
}
