import { Module } from "@nestjs/common";
import { SendNotification } from "@app/usecases/send-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification
  ]
})
export class HttpModule {}