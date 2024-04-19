export enum HttpStatusCode {
    unauthorized = 401,
    ok = 200,
    noContent = 204,
    badRequest = 400,
    serverError = 500
}

export type HttpResponse = {
    statusCode: HttpStatusCode
    body?: any
}

