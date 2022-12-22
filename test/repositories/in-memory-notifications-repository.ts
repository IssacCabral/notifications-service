import { Notification } from "@app/entities/notification/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository{
  public notifications: Notification[]
  
  constructor() {
    this.notifications = []
  }

  findById(notificationId: string): Promise<Notification> {
    throw new Error("Method not implemented.");
  }
  
  save(notification: Notification): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification)
  }
}