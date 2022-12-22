import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationDTO } from '../dtos/create-notification-dto';
import { SendNotification } from '@app/usecases/send-notification';

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

    return {
      notification: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId
      }
    }
  }
}