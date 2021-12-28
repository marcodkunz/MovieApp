import {Pipe, PipeTransform} from '@angular/core';
import {environment} from "../../environments/environment";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    if (value === null) return "";
    return environment.baseImageUrl + value;
  }
}
