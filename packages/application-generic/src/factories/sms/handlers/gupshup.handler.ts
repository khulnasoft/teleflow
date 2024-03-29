import { ChannelTypeEnum, ICredentials } from '@teleflow/shared';
import { BaseSmsHandler } from './base.handler';
import { GupshupSmsProvider } from '@teleflow/gupshup';

export class GupshupSmsHandler extends BaseSmsHandler {
  constructor() {
    super('gupshup', ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new GupshupSmsProvider({
      userId: credentials.user,
      password: credentials.password,
    });
  }
}
