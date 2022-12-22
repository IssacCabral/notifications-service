import { Content } from "../entities/notification/content"
import { Notification } from "../entities/notification/notification"
import { NotificationsRepository } from "../repositories/notifications-repository"

interface SendNotificationRequest{
  recipientId: string
  content: string
  category: string
}

interface SendNotificationResponse{
  notification: Notification
}

export class SendNotification{
  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse>{
    const {recipientId, content, category} = request

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category
    })

    return {
      notification
    }
  } 
}