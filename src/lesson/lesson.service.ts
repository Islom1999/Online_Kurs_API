import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LessonService {
    constructor(private prisma: PrismaService) {}

    async findAllLesson(){
        return this.prisma.lesson.findMany();
    }
}
