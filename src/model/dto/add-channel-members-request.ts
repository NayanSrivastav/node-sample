import { ApiProperty } from '@nestjs/swagger';

export class AddMembersToChannel {
  @ApiProperty()
  private emailsToAdd: Array<string>;
  @ApiProperty()
  private vtId: bigint;
  @ApiProperty()
  private ownerEmail: Array<string>;
}
