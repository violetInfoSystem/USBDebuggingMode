import { WebPlugin } from '@capacitor/core';

import type { DebuggingModePlugin } from './definitions';

export class DebuggingModeWeb extends WebPlugin implements DebuggingModePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
