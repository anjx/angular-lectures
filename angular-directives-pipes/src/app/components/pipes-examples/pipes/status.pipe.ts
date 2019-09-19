import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByStatus'
})
export class StatusPipe implements PipeTransform {
  transform(allTasks: any[], status: string): any {
    if (!allTasks || !status) {
      return allTasks;
    }

    return allTasks.filter(task => task.status === status);
  }
}
