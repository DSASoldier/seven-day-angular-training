import { Observable } from "rxjs";

export interface CanComponentDeactive{
    canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}