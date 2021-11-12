import {Pipe, PipeTransform} from '@angular/core';
import {baseImageUrl} from "../../environments/environment";

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): string {
    if (value === null) return "";
    return baseImageUrl + value;
  }

}
