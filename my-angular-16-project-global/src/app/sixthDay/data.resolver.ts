import { ActivatedRouteSnapshot, ResolveFn } from "@angular/router";
import { DataservicesService } from "./dataservices.service";
import { inject } from "@angular/core";

export const dataResolver :ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
    const dataService = inject(DataservicesService);
    const id  = route.paramMap.get('id');
    return dataService.getDataById(Number(id));
};