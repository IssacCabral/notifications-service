import { Injectable } from "@nestjs/common"
import { NotificationsRepository } from "../repositories/notifications-repository"
import { NotificationNotFoundError } from "./errors/notification-not-found-error"

interface CancelNotificationRequest{
  notificationId: string
}

type CancelNotificationResponse = void

@Injectable()
export class CancelNotification{
  constructor(
    private readonly notificationsRepository: NotificationsRepository
  ) {}

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse>{
    const {notificationId} = request

    const notification = await this.notificationsRepository.findById(notificationId)

    if(!notification){
      throw new NotificationNotFoundError()
    }

    notification.cancel()

    await this.notificationsRepository.save(notification)
  } 
}