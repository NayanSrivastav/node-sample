import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ChannelController } from 'src/channel/channel.controller';
import { AllExceptionsFilter } from 'src/common/exception.filter';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { HealthController } from '@/health/health.controller';
import { HealthModule } from '@/health/health.module';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { LoggerService } from '@/logger/logger.service';
import { LoggerProvider } from '@/logger/logger.provider';

console.log("ETE"+LoggerProvider['useFactory']);
@Module({
  imports: [
    PrometheusModule.register({
      path: '/teams-integrator/mgmt/prometheus',
      defaultMetrics: {
        enabled: false,
      },
    }),
    HealthModule,
    TerminusModule,
    HttpModule,
  ],
  providers: [
    LoggerProvider,
    LoggerService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
  controllers: [ChannelController, HealthController],
})
export class AppModule {}
