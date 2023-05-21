import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';


@Module({
  imports: [CategoryModule, CourseModule, LessonModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
