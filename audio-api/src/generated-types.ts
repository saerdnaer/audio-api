import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  URL: any;
  HTML: any;
  /** ISO 8601 DateTime format, this is capable of adding a time offset, see https://en.wikipedia.org/wiki/ISO_8601 */
  Datetime: any;
  /** ISO 8601 Duration format ([hh]:[mm]:[ss].[sss]), capable of adding milliseconds, see https://en.wikipedia.org/wiki/ISO_8601 */
  Duration: any;
  JSON: any;
  Cursor: any;
};





export enum TitleVariant {
  WithoutNumber = 'WITHOUT_NUMBER',
  Clean = 'CLEAN'
}

export enum AspectRatio {
  Square = 'SQUARE',
  Aspect_16x9 = 'ASPECT_16x9'
}

export enum PodcastVariant {
  /** episodic: Stand-alone episodes that should be presented last-to-first. */
  Episodic = 'EPISODIC',
  /** Serial: Episodes that should be presented first-to-last. Great for narratives, storytelling, thematic, and multiple seasons. */
  Serial = 'SERIAL'
}

export type Image = {
  url: Scalars['URL'];
  description?: Maybe<Scalars['String']>;
  attribution?: Maybe<Scalars['String']>;
};

/** The primary collection an Item is related to, e.g. a Podcast, Show or Conference */
export type Collection = {
  externalIds?: Maybe<Array<Scalars['String']>>;
  /** title of the podcast that is the primary field to be used to represent the podcast in directories, lists and other uses. */
  title: Scalars['String'];
  /** subtitle is an extension to the title. The subtitle is meant to clarify what the podcast is about. While a title can be anything, a subtitle should be more descriptive in what the content actually wants to convey and what the most important information is, you want everybody want to know about the offering. */
  subtitle?: Maybe<Scalars['String']>;
  /** A summary is a much more precise and elaborate description of the podcast's content. While title and subtitle are rather concise, a summary is meant to consist of one or more sentences that form a paragraph or more. */
  summary?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['HTML']>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  link?: Maybe<Scalars['URL']>;
};


/** The primary collection an Item is related to, e.g. a Podcast, Show or Conference */
export type CollectionExternalIdsArgs = {
  system?: Maybe<Directory>;
};


/** The primary collection an Item is related to, e.g. a Podcast, Show or Conference */
export type CollectionImageArgs = {
  aspect?: Maybe<AspectRatio>;
};

export type Podcast = {
  type?: Maybe<PodcastVariant>;
  episodes?: Maybe<ItemsConnection>;
  feedUrls?: Maybe<Array<Scalars['URL']>>;
  language?: Maybe<Scalars['String']>;
};

/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type Item = {
  guid: Scalars['ID'];
  externalIds?: Maybe<Array<Scalars['String']>>;
  /** Ordinal of the episode, either globally e.g. `72` or per season */
  episodeNumber?: Maybe<Scalars['Int']>;
  /** e.g. `FG072 Verantwortung in der Informatik` */
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['HTML']>;
  publicationDate: Scalars['Datetime'];
  depublicationDate?: Maybe<Scalars['Datetime']>;
  duration: Scalars['Duration'];
  durationSeconds: Scalars['Int'];
  link?: Maybe<Scalars['URL']>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  /** an guid grouping this Item to a season, series or multi part publication */
  groupingId?: Maybe<Scalars['ID']>;
  /**
   * Audio Assets
   * - media Assets played by an audio player
   * - format support depends on the used browser (https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats)
   * - also allows HLS streams
   */
  audios: Array<Asset>;
  /**
   * Files
   * - list of files available for download
   * - if no files are present, a player will use audio assets as downloads
   */
  files?: Maybe<Array<Asset>>;
  /** Contributors are natural persons providing content to that item */
  contributors?: Maybe<Array<Contributor>>;
  /** Chapters are sections of an episode */
  chapters?: Maybe<Array<Chapter>>;
  show?: Maybe<Collection>;
  nextEpisode?: Maybe<Item>;
};


/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type ItemExternalIdsArgs = {
  system?: Maybe<Directory>;
};


/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type ItemTitleArgs = {
  variant?: Maybe<TitleVariant>;
};


/** A single item of a Podcast Feed e.g. a single Episode, Teaser, Talk or Lecture */
export type ItemImageArgs = {
  aspect?: Maybe<AspectRatio>;
};

export type Asset = {
  /** absolute path to media asset */
  url: Scalars['URL'];
  /** file size in  byte */
  size: Scalars['Int'];
  /** title to be displayed in download tab e.g. `MPEG-4 AAC Audio (m4a)` */
  title?: Maybe<Scalars['String']>;
  /** media asset mimeType e.g. `audio/mp4` */
  mimeType: Scalars['String'];
};

export type Contributor = {
  /** used as a reference e.g. in transcripts */
  id: Scalars['ID'];
  /** name of the contributor e.g. Hans Meier */
  name: Scalars['String'];
  /** URI identifying the person e.g. his personal domain or this main social media profile e.g. Twitter/Mastodon */
  uri?: Maybe<Scalars['URL']>;
  /** avatar e.g. profile photo of the contributor */
  avatar?: Maybe<Image>;
  /** @deprecated try to use avatar.url if possible */
  avatarUrl?: Maybe<Scalars['URL']>;
  /** contributors group e.g. { id: "1", slug: "onair", title: "On Air" } */
  wikidataId?: Maybe<Scalars['String']>;
};

export type Chapter = {
  /** start time following [hh]:[mm]:[ss].[sss] format */
  start: Scalars['Duration'];
  title: Scalars['String'];
  /** image that will be presented in the header section if the chapter is available */
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  /** Link related to the chapter */
  href?: Maybe<Scalars['URL']>;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Organization = {
  name: Scalars['String'];
  image?: Maybe<Image>;
  uri?: Maybe<Scalars['URL']>;
  wikidataId?: Maybe<Scalars['String']>;
};

/** The root query type interface which gives access points into the data universe. */
export type AudioQuery = {
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  item?: Maybe<Item>;
  show?: Maybe<ShowType>;
  contributor?: Maybe<Contributor>;
  /** Reads and enables pagination through a set of `Item`. */
  items?: Maybe<ItemsConnection>;
  /** Reads and enables pagination through a set of `Collection`. */
  shows?: Maybe<CollectionConnection>;
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryItemArgs = {
  guid: Scalars['ID'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryShowArgs = {
  id: Scalars['ID'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryContributorArgs = {
  uri: Scalars['URL'];
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ItemsOrderBy>>;
};


/** The root query type interface which gives access points into the data universe. */
export type AudioQueryShowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
};

export type CollectionConnection = {
  /** A list of `Item` objects. */
  nodes: Array<Collection>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Collection` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  /** A list of `Item` objects. */
  nodes: Array<Item>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Item` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A connection to a list of `Organization` values. */
export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  /** A list of `Organization` objects. */
  nodes: Array<Organization>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organization` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
};

export type IntFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['Int']>;
  notEqualTo?: Maybe<Scalars['Int']>;
  distinctFrom?: Maybe<Scalars['Int']>;
  notDistinctFrom?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lessThan?: Maybe<Scalars['Int']>;
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  greaterThan?: Maybe<Scalars['Int']>;
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
};

export type BooleanFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['Boolean']>;
  notEqualTo?: Maybe<Scalars['Boolean']>;
};



export enum Directory {
  Itunes = 'ITUNES',
  Fyyd = 'FYYD',
  Panoptikum = 'PANOPTIKUM',
  Podcastindexorg = 'PODCASTINDEXORG',
  Internetarchive = 'INTERNETARCHIVE',
  Podchaser = 'PODCHASER',
  Listennotes = 'LISTENNOTES',
  Ardaudiothek = 'ARDAUDIOTHEK',
  Spotify = 'SPOTIFY'
}

export type ImageType = Image & {
  __typename?: 'ImageType';
  url: Scalars['URL'];
  description?: Maybe<Scalars['String']>;
  attribution?: Maybe<Scalars['String']>;
};

export type ShowType = Node & Collection & Podcast & {
  __typename?: 'ShowType';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  externalIds?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  description?: Maybe<Scalars['HTML']>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  link?: Maybe<Scalars['URL']>;
  type?: Maybe<PodcastVariant>;
  episodes?: Maybe<ItemsConnection>;
  feedUrls?: Maybe<Array<Scalars['URL']>>;
  language?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  /** @deprecated only for debugging */
  _raw?: Maybe<Scalars['JSON']>;
};


export type ShowTypeExternalIdsArgs = {
  system?: Maybe<Directory>;
};


export type ShowTypeImageArgs = {
  aspect?: Maybe<AspectRatio>;
};

export type ItemType = Node & Item & {
  __typename?: 'ItemType';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  guid: Scalars['ID'];
  externalIds?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['HTML']>;
  publicationDate: Scalars['Datetime'];
  depublicationDate?: Maybe<Scalars['Datetime']>;
  duration: Scalars['Duration'];
  durationSeconds: Scalars['Int'];
  link?: Maybe<Scalars['URL']>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  tags?: Maybe<Scalars['JSON']>;
  subjects?: Maybe<Scalars['JSON']>;
  episodeNumber?: Maybe<Scalars['Int']>;
  groupingId?: Maybe<Scalars['ID']>;
  isPublished: Scalars['Boolean'];
  audios: Array<Asset>;
  files?: Maybe<Array<Asset>>;
  contributors?: Maybe<Array<Contributor>>;
  chapters?: Maybe<Array<Chapter>>;
  show?: Maybe<Collection>;
  nextEpisode?: Maybe<Item>;
  /** @deprecated only for debugging */
  _raw?: Maybe<Scalars['JSON']>;
};


export type ItemTypeExternalIdsArgs = {
  system?: Maybe<Directory>;
};


export type ItemTypeTitleArgs = {
  variant?: Maybe<TitleVariant>;
};


export type ItemTypeImageArgs = {
  aspect?: Maybe<AspectRatio>;
};

export type AssetType = Asset & {
  __typename?: 'AssetType';
  /** absolute path to media asset */
  url: Scalars['URL'];
  /** file size in byte */
  size: Scalars['Int'];
  /** title to be displayed in download tab e.g. `MPEG-4 AAC Audio (m4a)` */
  title?: Maybe<Scalars['String']>;
  /** media asset mimeType e.g. `audio/mp4` */
  mimeType: Scalars['String'];
};

export type ContributorType = Contributor & {
  __typename?: 'ContributorType';
  /** used as a reference e.g. in transcripts */
  id: Scalars['ID'];
  uri: Scalars['URL'];
  /** name of the contributor e.g. `Hans Meier` */
  name: Scalars['String'];
  /** avatar e.g. profile photo of the contributor */
  avatar?: Maybe<Image>;
  /** @deprecated try to use avatar.url if possible */
  avatarUrl?: Maybe<Scalars['URL']>;
  wikidataId?: Maybe<Scalars['String']>;
};

/** A filter to be used against `Item` object types. All fields are combined with a logical ‘and.’ */
export type ItemFilter = {
  /** Filter by the object’s `id` field. */
  id?: Maybe<StringFilter>;
  /** Filter by the object’s `title` field. */
  title?: Maybe<StringFilter>;
  /** Filter by the object’s `groupId` field. */
  groupingId?: Maybe<StringFilter>;
  /** Filter by the object’s `episodeNumber` field. */
  episodeNumber?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ItemFilter>>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ItemFilter>>;
  /** Negates the expression. */
  not?: Maybe<ItemFilter>;
};

export enum ItemsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PublicationDateAsc = 'PUBLICATION_DATE_ASC',
  PublicationDateDesc = 'PUBLICATION_DATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  GroupIdAsc = 'GROUP_ID_ASC',
  GroupIdDesc = 'GROUP_ID_DESC',
  GroupNumberAsc = 'GROUP_NUMBER_ASC',
  GroupNumberDesc = 'GROUP_NUMBER_DESC'
}

export type OrganizationType = Node & Organization & {
  __typename?: 'OrganizationType';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  name: Scalars['String'];
  uri?: Maybe<Scalars['URL']>;
  wikidataId?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};


export type OrganizationTypeImageArgs = {
  aspect?: Maybe<AspectRatio>;
};

export enum OrganizationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type ShowsConnection = CollectionConnection & {
  __typename?: 'ShowsConnection';
  nodes: Array<ShowType>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Query = Node & AudioQuery & {
  __typename?: 'Query';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  query: Query;
  /** version, for backwards compability with other JSON formats */
  version?: Maybe<Scalars['Int']>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  test2?: Maybe<Scalars['String']>;
  item?: Maybe<Item>;
  show?: Maybe<ShowType>;
  contributor?: Maybe<Contributor>;
  contributorById?: Maybe<Contributor>;
  organization?: Maybe<Organization>;
  /** Reads and enables pagination through a set of `Item`. */
  items?: Maybe<ItemsConnection>;
  /** Reads and enables pagination through a set of `Show`. */
  shows?: Maybe<ShowsConnection>;
  /** Reads and enables pagination through a set of `Organization`. */
  organizations?: Maybe<OrganizationsConnection>;
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


export type QueryItemArgs = {
  guid: Scalars['ID'];
  source?: Maybe<Directory>;
};


export type QueryShowArgs = {
  id: Scalars['ID'];
  source?: Maybe<Directory>;
};


export type QueryContributorArgs = {
  uri: Scalars['URL'];
  source?: Maybe<Directory>;
};


export type QueryContributorByIdArgs = {
  id: Scalars['ID'];
  source?: Maybe<Directory>;
};


export type QueryOrganizationArgs = {
  name: Scalars['String'];
  source?: Maybe<Directory>;
};


export type QueryItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ItemsOrderBy>>;
  source?: Maybe<Directory>;
};


export type QueryShowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  source?: Maybe<Directory>;
};


export type QueryOrganizationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<OrganizationsOrderBy>>;
  source?: Maybe<Directory>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  URL: ResolverTypeWrapper<Scalars['URL']>;
  HTML: ResolverTypeWrapper<Scalars['HTML']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  Duration: ResolverTypeWrapper<Scalars['Duration']>;
  TitleVariant: TitleVariant;
  AspectRatio: AspectRatio;
  PodcastVariant: PodcastVariant;
  Image: ResolversTypes['ImageType'];
  String: ResolverTypeWrapper<Scalars['String']>;
  Collection: ResolversTypes['ShowType'];
  Podcast: ResolversTypes['ShowType'];
  Item: ResolversTypes['ItemType'];
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Asset: ResolversTypes['AssetType'];
  Contributor: ResolversTypes['ContributorType'];
  Chapter: never;
  Node: ResolversTypes['ShowType'] | ResolversTypes['ItemType'] | ResolversTypes['OrganizationType'] | ResolversTypes['Query'];
  Organization: ResolversTypes['OrganizationType'];
  AudioQuery: ResolversTypes['Query'];
  CollectionConnection: ResolversTypes['ShowsConnection'];
  ItemsConnection: ResolverTypeWrapper<ItemsConnection>;
  OrganizationsConnection: ResolverTypeWrapper<OrganizationsConnection>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  StringFilter: StringFilter;
  IntFilter: IntFilter;
  BooleanFilter: BooleanFilter;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  Directory: Directory;
  ImageType: ResolverTypeWrapper<ImageType>;
  ShowType: ResolverTypeWrapper<ShowType>;
  ItemType: ResolverTypeWrapper<ItemType>;
  AssetType: ResolverTypeWrapper<AssetType>;
  ContributorType: ResolverTypeWrapper<ContributorType>;
  ItemFilter: ItemFilter;
  ItemsOrderBy: ItemsOrderBy;
  OrganizationType: ResolverTypeWrapper<OrganizationType>;
  OrganizationsOrderBy: OrganizationsOrderBy;
  ShowsConnection: ResolverTypeWrapper<ShowsConnection>;
  Query: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  URL: Scalars['URL'];
  HTML: Scalars['HTML'];
  Datetime: Scalars['Datetime'];
  Duration: Scalars['Duration'];
  Image: ResolversParentTypes['ImageType'];
  String: Scalars['String'];
  Collection: ResolversParentTypes['ShowType'];
  Podcast: ResolversParentTypes['ShowType'];
  Item: ResolversParentTypes['ItemType'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Asset: ResolversParentTypes['AssetType'];
  Contributor: ResolversParentTypes['ContributorType'];
  Chapter: never;
  Node: ResolversParentTypes['ShowType'] | ResolversParentTypes['ItemType'] | ResolversParentTypes['OrganizationType'] | ResolversParentTypes['Query'];
  Organization: ResolversParentTypes['OrganizationType'];
  AudioQuery: ResolversParentTypes['Query'];
  CollectionConnection: ResolversParentTypes['ShowsConnection'];
  ItemsConnection: ItemsConnection;
  OrganizationsConnection: OrganizationsConnection;
  PageInfo: PageInfo;
  Boolean: Scalars['Boolean'];
  StringFilter: StringFilter;
  IntFilter: IntFilter;
  BooleanFilter: BooleanFilter;
  JSON: Scalars['JSON'];
  Cursor: Scalars['Cursor'];
  ImageType: ImageType;
  ShowType: ShowType;
  ItemType: ItemType;
  AssetType: AssetType;
  ContributorType: ContributorType;
  ItemFilter: ItemFilter;
  OrganizationType: OrganizationType;
  ShowsConnection: ShowsConnection;
  Query: {};
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface HtmlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HTML'], any> {
  name: 'HTML';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  __resolveType: TypeResolveFn<'ImageType', ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  __resolveType: TypeResolveFn<'ShowType', ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<CollectionExternalIdsArgs, never>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<CollectionImageArgs, never>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
};

export type PodcastResolvers<ContextType = any, ParentType extends ResolversParentTypes['Podcast'] = ResolversParentTypes['Podcast']> = {
  __resolveType: TypeResolveFn<'ShowType', ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PodcastVariant']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType>;
  feedUrls?: Resolver<Maybe<Array<ResolversTypes['URL']>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'ItemType', ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<ItemExternalIdsArgs, never>>;
  episodeNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ItemTitleArgs, never>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  publicationDate?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  depublicationDate?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Duration'], ParentType, ContextType>;
  durationSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<ItemImageArgs, never>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  groupingId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  audios?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['Asset']>>, ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<ResolversTypes['Contributor']>>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<Array<ResolversTypes['Chapter']>>, ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  nextEpisode?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  __resolveType: TypeResolveFn<'AssetType', ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ContributorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contributor'] = ResolversParentTypes['Contributor']> = {
  __resolveType: TypeResolveFn<'ContributorType', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ChapterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Duration'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  href?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'ShowType' | 'ItemType' | 'OrganizationType' | 'Query', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  __resolveType: TypeResolveFn<'OrganizationType', ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type AudioQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AudioQuery'] = ResolversParentTypes['AudioQuery']> = {
  __resolveType: TypeResolveFn<'Query', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<AudioQueryNodeArgs, 'nodeId'>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<AudioQueryItemArgs, 'guid'>>;
  show?: Resolver<Maybe<ResolversTypes['ShowType']>, ParentType, ContextType, RequireFields<AudioQueryShowArgs, 'id'>>;
  contributor?: Resolver<Maybe<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<AudioQueryContributorArgs, 'uri'>>;
  items?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType, RequireFields<AudioQueryItemsArgs, never>>;
  shows?: Resolver<Maybe<ResolversTypes['CollectionConnection']>, ParentType, ContextType, RequireFields<AudioQueryShowsArgs, never>>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  __resolveType: TypeResolveFn<'ShowsConnection', ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type ItemsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemsConnection'] = ResolversParentTypes['ItemsConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationsConnection'] = ResolversParentTypes['OrganizationsConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export type ImageTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ImageType'] = ResolversParentTypes['ImageType']> = {
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowType'] = ResolversParentTypes['ShowType']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<ShowTypeExternalIdsArgs, never>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<ShowTypeImageArgs, never>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PodcastVariant']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType>;
  feedUrls?: Resolver<Maybe<Array<ResolversTypes['URL']>>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemType'] = ResolversParentTypes['ItemType']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<ItemTypeExternalIdsArgs, never>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ItemTypeTitleArgs, never>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  publicationDate?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  depublicationDate?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Duration'], ParentType, ContextType>;
  durationSeconds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<ItemTypeImageArgs, never>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subjects?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  episodeNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  groupingId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isPublished?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  audios?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['Asset']>>, ParentType, ContextType>;
  contributors?: Resolver<Maybe<Array<ResolversTypes['Contributor']>>, ParentType, ContextType>;
  chapters?: Resolver<Maybe<Array<ResolversTypes['Chapter']>>, ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>;
  nextEpisode?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetType'] = ResolversParentTypes['AssetType']> = {
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mimeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContributorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContributorType'] = ResolversParentTypes['ContributorType']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationType'] = ResolversParentTypes['OrganizationType']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  wikidataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<OrganizationTypeImageArgs, never>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowsConnection'] = ResolversParentTypes['ShowsConnection']> = {
  nodes?: Resolver<Array<ResolversTypes['ShowType']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
  test2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'guid'>>;
  show?: Resolver<Maybe<ResolversTypes['ShowType']>, ParentType, ContextType, RequireFields<QueryShowArgs, 'id'>>;
  contributor?: Resolver<Maybe<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<QueryContributorArgs, 'uri'>>;
  contributorById?: Resolver<Maybe<ResolversTypes['Contributor']>, ParentType, ContextType, RequireFields<QueryContributorByIdArgs, 'id'>>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'name'>>;
  items?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType, RequireFields<QueryItemsArgs, never>>;
  shows?: Resolver<Maybe<ResolversTypes['ShowsConnection']>, ParentType, ContextType, RequireFields<QueryShowsArgs, never>>;
  organizations?: Resolver<Maybe<ResolversTypes['OrganizationsConnection']>, ParentType, ContextType, RequireFields<QueryOrganizationsArgs, never>>;
};

export type Resolvers<ContextType = any> = {
  URL?: GraphQLScalarType;
  HTML?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  Duration?: GraphQLScalarType;
  Image?: ImageResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Podcast?: PodcastResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  Contributor?: ContributorResolvers<ContextType>;
  Chapter?: ChapterResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  AudioQuery?: AudioQueryResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  ItemsConnection?: ItemsConnectionResolvers<ContextType>;
  OrganizationsConnection?: OrganizationsConnectionResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Cursor?: GraphQLScalarType;
  ImageType?: ImageTypeResolvers<ContextType>;
  ShowType?: ShowTypeResolvers<ContextType>;
  ItemType?: ItemTypeResolvers<ContextType>;
  AssetType?: AssetTypeResolvers<ContextType>;
  ContributorType?: ContributorTypeResolvers<ContextType>;
  OrganizationType?: OrganizationTypeResolvers<ContextType>;
  ShowsConnection?: ShowsConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
