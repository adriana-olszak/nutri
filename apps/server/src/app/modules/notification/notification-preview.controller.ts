import { Controller, Get, Query } from '@nestjs/common';
import { renderJobAcceptedMagicLink } from '@nutri/emails';

@Controller('notification-preview')
export class NotificationPreviewController {

  @Get('job-accepted-magic-link')
  previewJobAcceptedMagicLink(@Query() queryParams: any): string {
    return renderJobAcceptedMagicLink(queryParams);
  }
}
