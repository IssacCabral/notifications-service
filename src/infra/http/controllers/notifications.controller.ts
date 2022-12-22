import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationDTO } from '../dtos/create-notification-dto';
import { PrismaService } from '../../database/prisma/prisma.service';
import { SendNotification } from 'src/app/usecases/send-notification';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly sendNotification: SendNotification
  ) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const {recipientId, content, category} = body
    const {notification} = await this.sendNotification.execute({
      recipientId,
      content,
      category
    })

    return {notification}
  }
}