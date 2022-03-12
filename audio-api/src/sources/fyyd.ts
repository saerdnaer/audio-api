import { Item, ItemsConnection, ShowType, ShowsConnection } from "../generated-types";
import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import { DataSource } from "./interface";
import config from "../config";

/*
 * Docs: https://github.com/eazyliving/fyyd-api
 *
 */

type EpisodeSearchArgs = {
  title?: string; // the episode's title. Search might use parts of the string to find the episode.
  guid?: string; // the episode's GUID as stated inside the podcasts feed.
  podcast_id?: Number; // the podcast's id in fyyd's database.
  podcast_title?: string; // the podcast's title. Search might use parts of the string to find the podcast.
  pubdate?: string; // the pubDate as stated inside the podcasts feed.
  duration?: Number; // the duration of the episode in seconds.
  url?: string; // the episode's url as stated inside the podcast's feed.
  term?: string; // a search term to find inside the episodes.
};
/* Please note: title, guid, pubdate, duration, url and term add episodes together. Think of a logical OR.
In contrast to that, podcast_id and podcast_title restrict all episodes to podcasts matching to one of podcast_id or podcast_title. */

export class FyydAPI extends RESTDataSource implements DataSource {
  constructor() {
    super();
    this.baseURL = "https://api.fyyd.de/0.2/";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set(
      "User-Agent",
      `saerdnaer/audio-api (${config.branch || "local"})`
    );
  }

  formatEpisode(data: any): Item {
    return {
      __typename: "ItemType",
      nodeId: `fyyd:e${data.id}`,
      ...data,
      episodeNumber: data.num_episode,
      publicationDate: data.pub_date,
      duration: data.duration_string,
      durationSeconds: data.duration,
      image: {
        __typename: "ImageType",
        url: data.imgURL
      },
      audios: [
        {
          __typename: "AssetType",
          mimeType: data.content_type,
          url: data.enclosure,
        }
      ],
      link: data.url,
      _raw: data,
    };
  }
  async episode(id: string): Promise<Item> {
    const response = await this.get(`episode?episode_id=${id}`);
    return this.formatEpisode(response.data);
  }
  async episodes(args: EpisodeSearchArgs): Promise<Item[]> {
    const response = await this.get("/search/episode", args);
    return response.data.map(this.formatEpisode);
  }

  formatPodcast(p: PodcastData): ShowType {
    return {
      __typename: "ShowType",
      nodeId: `fyyd:${p.slug}`,
      summary: p.description,
      ...p,
      image: {
        __typename: "ImageType",
        url: p.thumbImageURL,
        urls: [
          p.layoutImageURL, //  https://img-1.fyyd.de/pd/layout/4279c90453fc0dafbc5b9cf76f3442964.jpg
          p.thumbImageURL,  //  https://img-1.fyyd.de/pd/thumbs/4279c90453fc0dafbc5b9cf76f3442964.png
          p.smallImageURL,  //  https://img-1.fyyd.de/pd/small/4279c90453fc0dafbc5b9cf76f3442964.jpg
          p.microImageURL,  //  https://img-1.fyyd.de/pd/micro/4279c90453fc0dafbc5b9cf76f3442964.png
        ]
      } as any,
      episodes: {
        totalCount: +p.episode_count,
      } as ItemsConnection,
      feedUrls: [
        p.xmlURL
      ],
      link: p.htmlURL,
      meta: {
        generator: p.generator,
        stats: p.stats,
        url: p.url_fyyd,
        rank: p.rank,
        color: p.color,
        tcolor: p.tcolor,
      },
      _raw: p,
    };
  }

  async podcast({ id, slug }: any): Promise<ShowType> {
    const response = id
      ? await this.get<FyydResponse<PodcastData>>(`podcast?podcast_id=${id}`)
      : await this.get<FyydResponse<PodcastData>>(`podcast?podcast_slug=${slug}`);
    return this.formatPodcast(response.data);
  }

  async podcasts(
    page: Number = 0,
    count: Number = 50
  ): Promise<ShowsConnection> {
    const response = await this.get<FyydResponse<PodcastData[]>>(
      `podcasts?page=${page}&count=${count}`
    );

    return {
      ...pageInfos(response),
      nodes: response.data.map(this.formatPodcast),
    };
  }
}

const pageInfos = ({ meta }: FyydResponse<any>) => {
  const { paging } = meta;
  return {
    pageInfo: {
      hasNextPage: paging.next_page != null,
      hasPreviousPage: paging.prev_page != null,
    },
    totalCount: paging.count || 0,
  }
}

export interface FyydResponse<T> {
  status: number;
  msg:    string;
  meta: {
    paging: {
      count:      number | null;
      page:       number | null;
      first_page: number;
      last_page:  number;
      next_page:  number;
      prev_page:  number|null;
    };
    API_INFO: {
      API_VERSION: string;
    };
    SERVER:   string;
    duration: number;
  };
  data:   T;
}

export interface PodcastData {
  title:          string;
  id:             number;
  xmlURL:         string;
  htmlURL:        string;
  imgURL:         string;
  status:         number;
  status_since:   string;
  slug:           string;
  layoutImageURL: string;
  thumbImageURL:  string;
  smallImageURL:  string;
  microImageURL:  string;
  language:       string;
  lastpoll:       string;
  generator:      string;
  categories:     number[];
  lastpub:        string;
  rank:           number;
  url_fyyd:       string;
  description:    string;
  subtitle:       string;
  tcolor:         string;
  color:          string;
  episode_count:  string;
  iflags:         string;
  paymentURL:     null;
  author:         string;
  stats:          {
    medianduration:        number;
    medianduration_string: string;
    episodecount:          number;
    pubinterval:           number;
    pubinterval_string:    string;
    pubinterval_value:     number;
    pubinterval_type:      number;
  };
};