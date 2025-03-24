import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(args);
    if (args.length) {
      let [data] = args;
      return value * data;
    }else{
      return value;
    }
  }

}
