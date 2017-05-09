import { Injectable } from '@angular/core';
import { IErrorResponse } from "app/models/error-response.interface";

@Injectable()
export class ErrorHandlerService {

  constructor() { }

  public getModelErrors(errorResponse: IErrorResponse): string[] {
    if (errorResponse.modelState === undefined || errorResponse.modelState == null)
      return [];

    let modelErrors: string[] = [];
    if (errorResponse.modelState != {}) {
      {
        for (let key of Object.keys(errorResponse.modelState)) {
          modelErrors.push(errorResponse.modelState[key][0]);
        }
      }
      return modelErrors;
    }

  }
}