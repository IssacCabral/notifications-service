import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationDTO } from './create-notification-dto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  @Get()
  async list() {
    return await this.prisma.notification.findMany()
  }

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const {recipientId, content, category} = body
    return await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        recipientId,
        content,
        category,
      }
    })
  }
}