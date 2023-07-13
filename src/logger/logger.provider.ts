import { Provider, Scope } from '@nestjs/common';
import { Request } from 'express';
import { LoggerService } from '@/logger/logger.service';
import { TRACE_ID } from '@/model/dto/constants';
import { v4 as uuidV4 } from 'uuid';

export const LoggerProvider: Provider = {
  provide: LoggerService,
  scope: Scope.REQUEST, // Set the scope to request to maintain per-request instances
  useFactory: (req: Request) => {
    console.log('LoggerProvider called'); // Add this line
    req.headers[TRACE_ID] = req.headers[TRACE_ID] || uuidV4();
    const logger = new LoggerService();
    const defaultAttributes = {
      TRACE_ID: req.headers[TRACE_ID],
    };
    logger.setDefaultAttributes(defaultAttributes);
    return logger;
  },
  inject: [Request],
};
