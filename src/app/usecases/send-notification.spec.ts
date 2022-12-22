import { SendNotification } from "./send-notification"

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification()

    const {notification} = await sendNotification.execute({
      content: 'This is a notifications',
      category: 'social',
      recipientId: 'recipientId'
    })

    expect(notification).toBeTruthy()
  })
})