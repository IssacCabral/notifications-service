import { Notification } from "src/app/entities/notification/notification";
import { NotificationsRepository } from "src/app/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository{
  public notifications: Notification[]
  
  constructor() {
    this.notifications = []
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification)
  }
}