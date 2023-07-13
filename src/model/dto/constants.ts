export const APP_NAME = 'teams-integrator';
export const MGMT = 'mgmt';
export const HEALTH = 'health';
export const SWAGGER_PATH = '/teams-integrator/swaggger-ui/index.html';
export const SPEC_FILE = 'generated_spec.yaml';
export const TRACE_ID = 'trace_d';
export function formEndpoint(...path: string[]) {
  return path.join('/');
}
