import { Controller } from '@nestjs/common';
import { LoggerService } from '@/logger/logger.service';
import { Get, Put, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddMembersToChannel } from '@Model/dto/add-channel-members-request';

@ApiTags('Channel')
@Controller('channel')
export class ChannelController {
  constructor(private readonly logger: LoggerService) {}

  @Get('/:tenantId/:channelId')
  @ApiOperation({
    summary: 'get channel members',
    operationId: 'getChannelMembers',
  })
  getChannelMembers(
    @Param('tenantId') tenantId: bigint,
    @Param('channelId') channelId: string,
  ): string {
    this.logger.log('sample log ');
    return 'channel-members';
  }

  @Put('/:tenantId/:channelId')
  @ApiOperation({
    summary: 'add members to channel',
    operationId: 'addMembersToChannel',
  })
  addMembersToChannel(
    @Param('tenantId') tenantId: bigint,
    @Param('channelId') channelId: string,
    @Body() request: AddMembersToChannel,
  ) {
    throw new TypeError('Error message');
  }
}
