import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationDTO } from '../dtos/create-notification-dto';
import { SendNotification } from '@app/usecases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';

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
      notification: NotificationViewModel.toHTTP(notification)
    }
  }
}