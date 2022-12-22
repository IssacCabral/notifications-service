import { IsNotEmpty, IsUUID, Length } from "class-validator"

export class CreateNotificationDTO{
  @IsNotEmpty()
  @IsUUID()
  recipientId: string

  @IsNotEmpty()
  @Length(5, 240)
  content: string

  @IsNotEmpty()
  @Length(5, 50)
  category: string
}