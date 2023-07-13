import { Logger } from '@nestjs/common';

export class LoggerService extends Logger {
  private defaultAttributes: Record<string, any> = {};

  constructor() {
    super();
    console.log('here0');
  }

  setDefaultAttributes(attributes: Record<string, any>) {
    this.defaultAttributes = attributes;
  }

  private enrichMessage(message: any, context?: string): string {
    console.log('here0' + JSON.stringify(context));
    const enrichedMessage = {
      ...this.defaultAttributes,
      context,
      message: message instanceof Object ? JSON.stringify(message) : message,
    };
    return JSON.stringify(enrichedMessage);
  }

  log(message: any, context?: string) {
    super.log(this.enrichMessage(message, context));
  }

  error(message: any, trace?: string, context?: string) {
    super.error(this.enrichMessage(message, context), trace);
  }

  warn(message: any, context?: string) {
    super.warn(this.enrichMessage(message, context));
  }

  debug(message: any, context?: string) {
    super.debug(this.enrichMessage(message, context));
  }

  verbose(message: any, context?: string) {
    super.verbose(this.enrichMessage(message, context));
  }
}
