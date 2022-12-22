import { Notification } from "@app/entities/notification/notification"

export class PrismaNotificationMapper{
  static toPrisma(notification: Notification){
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
      readtAt: notification.readtAt,
      createdAt: notification.createdAt
    }
  }
}