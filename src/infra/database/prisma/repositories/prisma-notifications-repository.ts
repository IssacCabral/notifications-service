import { Injectable } from "@nestjs/common";
import { Notification } from "src/app/entities/notification/notification";
import { NotificationsRepository } from "../../../../app/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.value,
        category: notification.category,
        readtAt: notification.readtAt,
        createdAt: notification.createdAt
      }
    }) 
  }
}