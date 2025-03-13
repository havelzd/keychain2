export type ApiResponse = {};
export type ApiRequest<R extends ApiResponse> = {
  response: R;
};

export type ApiResponseType<Request> =
  Request extends ApiRequest<infer R> ? R : never;
