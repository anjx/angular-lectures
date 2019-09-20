import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class StatusPipe<T> implements PipeTransform {
  transform(allTasks: T[], status: string) {
    if (!allTasks || !status) {
      return allTasks;
    }

    return allTasks.filter((task) => task.status === status);
  }
}
