import { Notification } from "./notification"
import { Content } from "./content"

const makeNotification = () => {
  return new Notification({
    recipientId: 'recipientId',
    category: 'social',
    content: new Content('my_content'),
  })
}

describe('Notification', () => {
  it('should create a notification on success', () => {
    const notification = makeNotification()
    expect(notification).toBeTruthy()
  })
})