import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public courses: Course[];
  public courses$: Observable<Course[]>;
  public searchCriterion: string;
  public currentPage = 0;

  public newCourse = {} as Course;
  public editMode = false;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.initCourses();
  }

  initCourses() {
    this.currentPage = 0;
    this.loadCourses();
  }

  loadCourses() {
    // this.courseService.getList(this.currentPage, this.searchCriterion).subscribe(({ courses }) => {
    //   this.courses = this.currentPage > 0 ? this.courses.concat(courses) : courses;
    // });
    // this.courseService.getList().subscribe(({ courses }) => {
    //   this.courses = courses;
    // });
    this.courses$ = this.courseService.getList().pipe(
      map(({ courses }) => courses)
    );
  }

  loadMoreCourses() {
    this.currentPage++;
    this.loadCourses();
  }

  createCourse() {
    this.courseService.createCourse(this.newCourse).subscribe(() => {
      this.newCourse = {} as Course;
      this.loadCourses();
    });
  }

  editCourse() {
    this.courseService.updateItem(this.newCourse).subscribe((edited) => {
      const courseIdx = this.courses.findIndex((course) => course.id === edited.id);
      this.courses[courseIdx] = edited;

      this.newCourse = {} as Course;
      this.editMode = false;
    });
  }

  onEdit(course: Course) {
    this.editMode = true;
    this.newCourse = { ...course };
  }

  onRemove(course: Course) {
    this.courseService.removeItem(course).subscribe(() => {
      this.courses.splice(this.courses.indexOf(course, 1));
    });
  }
}
