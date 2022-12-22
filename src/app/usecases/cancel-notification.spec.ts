import { Content } from "@app/entities/notification/content"
import { Notification } from "@app/entities/notification/notification"
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository"
import { randomUUID } from "crypto"
import { CancelNotification } from "./cancel-notification"

describe('Cancel Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
      recipientId: randomUUID(),
    })

    await notificationsRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id
    })

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date)
    )
  })
})