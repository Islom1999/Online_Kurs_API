import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LessonService } from './lesson.service';

@ApiTags('lesson')
@Controller('lesson')
export class LessonController {
    constructor(private lessonServise: LessonService){}

    @Get()
    findAllLessons(){
        return this.lessonServise.findAllLesson()
    }
}
