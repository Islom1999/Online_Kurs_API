import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CourseService } from './course.service';

@ApiTags('course')
@Controller('course')
export class CourseController {
    constructor(private courseServise: CourseService){}

    @Get()
    findAllCourse(){
        return this.courseServise.findAllCourse()
    }
}
