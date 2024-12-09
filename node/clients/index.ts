import { IOClients } from '@vtex/api';

import { SanityClient } from './sanity';

export class Clients extends IOClients {
  public get sanity() {
    return this.getOrSet('sanity', SanityClient);
  }
}
