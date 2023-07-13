import { APP_NAME, MGMT, HEALTH, formEndpoint } from '@/model/dto/constants';
import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller(formEndpoint(APP_NAME, MGMT, HEALTH))
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return {
      status: 200,
    };
  }
}
