import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class DemoPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // tslint:disable-next-line:no-console
    console.log('value', value);
    // tslint:disable-next-line:no-console
    console.log('metadata', metadata);
    return value;
  }
}
