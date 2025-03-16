import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'addLine' })
export class addLinePipe implements PipeTransform {
  transform(value: string | undefined): string[] {
      return value === undefined ? [] : value.split("\n")
  }
}