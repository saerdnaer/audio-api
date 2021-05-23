import { Item, ShowsConnection, ShowType } from "../generated-types";

export interface DataSource {

  episode(id: string): Promise<Item>;
  episodes(args: EpisodeSearchArgs | any): Promise<Item[]>;

  podcast({ id, slug }: any): Promise<ShowType>;
  podcasts(page: Number, count: Number): Promise<ShowsConnection>;
};

export type EpisodeSearchArgs = {
  title?: string; // the episode's title. Search might use parts of the string to find the episode.
  guid?: string; // the episode's GUID as stated inside the podcasts feed.
  podcast_id?: string; // the podcast's id in fyyd's database.
  podcast_title?: string; // the podcast's title. Search might use parts of the string to find the podcast.
  pubdate?: string; // the pubDate as stated inside the podcasts feed.
  duration?: Number; // the duration of the episode in seconds.
  url?: string; // the episode's url as stated inside the podcast's feed.
  term?: string; // a search term to find inside the episodes.
};
