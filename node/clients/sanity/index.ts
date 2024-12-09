import type { InstanceOptions, IOContext } from '@vtex/api';
import { ExternalClient } from '@vtex/api';

type SanityContent = {
  _type: string;
  _rev: string;
  [key: string]: any;
};

type QueryResult = {
  query: string;
  result: SanityContent[];
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
    super(``, context, options);
  }

  public getSanityContent = async ({ projectId, dataset, apiVersion, authToken }: Settings, query: string): Promise<QueryResult> => {
    const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${query}`;

    return this.http.get(url, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  };
}
