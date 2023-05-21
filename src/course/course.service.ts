import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
    constructor(private prisma: PrismaService) {}

    async findAllCourse(){
        return this.prisma.course.findMany();
    }
}
