import { IsOptional, IsDefined } from 'class-validator';
import { MarkMessagesAsEnum } from '@teleflow/shared';

import { EnvironmentWithSubscriber } from '../../../shared/commands/project.command';

export class MarkAllMessagesAsCommand extends EnvironmentWithSubscriber {
  @IsOptional()
  feedIdentifiers?: string[];

  @IsDefined()
  markAs: MarkMessagesAsEnum;
}
