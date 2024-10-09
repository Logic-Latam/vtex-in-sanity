import type { InstanceOptions, IOContext } from '@vtex/api';
import { ExternalClient } from '@vtex/api';

type StoreTemplateCard = {
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  _createdAt: string;
  title: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

type QueryResult = {
  query: string;
  result: [StoreTemplateCard];
};

type Settings = {
  projectId: string;
  dataset: string;
  apiVersion: string;
  authToken: string;
};

export class SanityClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    // super(`https://o2jl7jfz.api.sanity.io/v2022-03-07/data/query/dev-2024-05-23`, context, options);
    super(`https://o2jl7jfz.api.sanity.io`, context, options);
  }

  private getSanityContent(settings: Settings, query: string): Promise<QueryResult> {
    return this.http.get(`/v${settings.apiVersion}/data/query/${settings.dataset}?query=${query}`, {
      headers: {
        Authorization: `Bearer ${settings.authToken}`,
      },
    });
  }

  public async storeTemplatedCards(settings: Settings): Promise<[StoreTemplateCard]> {
    const content = await this.getSanityContent(settings, '*[_type=="storeTemplatedCard"]');

    return content.result;
  }

  public async footer(settings: Settings): Promise<[StoreTemplateCard]> {
    const content = await this.getSanityContent(settings, '*[_type=="footer"]');

    return content.result;
  }
}
