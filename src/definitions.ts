export interface DebuggingModePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
