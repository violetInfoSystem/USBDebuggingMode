import { WebPlugin } from '@capacitor/core';
import { DebuggingModePlugin } from './index';
export declare class DebuggingModeWeb extends WebPlugin implements DebuggingModePlugin {
    DebuggingEnabled(): Promise<{
        usbDebuggingEnabled: boolean;
        wirelessAdbEnabled: boolean;
    }>;
}
