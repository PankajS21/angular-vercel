import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testingPipes'
})
export class TestingPipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
