import { Pipe, PipeTransform } from '@angular/core';
import { TreeviewItem } from '../models/treeview-item';
import { isNil } from '../utils';

@Pipe({
          name: 'ngxTreeview'
      })
export class TreeviewPipe implements PipeTransform {
    transform(objects: any[], textField: string): TreeviewItem[] {
        if (isNil(objects)) {
            return undefined;
        }

        return objects.map(object => new TreeviewItem({ text: object[textField], value: object }));
    }
}
