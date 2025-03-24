import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipes'
})
export class TestpipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
