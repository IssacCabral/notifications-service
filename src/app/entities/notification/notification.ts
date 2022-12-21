import { Replace } from "src/helpers/replace"
import { Content } from "./content"

export interface NotificationProps{
  recipientId: string
  content: Content
  category: string
  readtAt?: Date | null
  createdAt: Date
}

export class Notification{
  private props: NotificationProps

  constructor(props: Replace<NotificationProps, {createdAt?: Date}>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  public get recipientId(): string{
    return this.props.recipientId
  }

  public set recipientId(recipientId: string){
    this.props.recipientId = recipientId
  }

  public get content(): Content{
    return this.props.content
  }

  public set content(content: Content){
    this.props.content = content
  }

  public get category(): string{
    return this.props.category
  }

  public set category(category: string){
    this.props.category = category
  }

  public get readtAt(): Date | null | undefined{
    return this.props.readtAt
  }

  public set readtAt(readtAt: Date){
    this.props.readtAt = readtAt
  }

  public get createdAt(): Date{
    return this.props.createdAt
  }
}