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
  Datetime: any;
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
  Episodic = 'EPISODIC',
  Serial = 'SERIAL'
}

export type Image = {
  url: Scalars['URL'];
  description?: Maybe<Scalars['String']>;
  attribution?: Maybe<Scalars['String']>;
};

export type Collection = {
  externalIds?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['HTML']>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  link?: Maybe<Scalars['URL']>;
  items?: Maybe<ItemsConnection>;
};


export type CollectionExternalIdsArgs = {
  system?: Maybe<Directory>;
};


export type CollectionImageArgs = {
  aspect?: Maybe<AspectRatio>;
};

export type Podcast = {
  type?: Maybe<PodcastVariant>;
  episodes?: Maybe<ItemsConnection>;
};

export type Item = {
  guid: Scalars['ID'];
  externalIds?: Maybe<Array<Scalars['String']>>;
  episodeNumber?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  description?: Maybe<Scalars['HTML']>;
  publicationDate: Scalars['Datetime'];
  depublicationDate?: Maybe<Scalars['Datetime']>;
  duration: Scalars['Duration'];
  durationSeconds: Scalars['Int'];
  link?: Maybe<Scalars['URL']>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  groupingId?: Maybe<Scalars['ID']>;
  audios: Array<Asset>;
  files?: Maybe<Array<Asset>>;
  contributors?: Maybe<Array<Contributor>>;
  chapters?: Maybe<Array<Chapter>>;
  show?: Maybe<Collection>;
  nextEpisode?: Maybe<Item>;
};


export type ItemExternalIdsArgs = {
  system?: Maybe<Directory>;
};


export type ItemTitleArgs = {
  variant?: Maybe<TitleVariant>;
};


export type ItemImageArgs = {
  aspect?: Maybe<AspectRatio>;
};

export type Asset = {
  url: Scalars['URL'];
  size: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
};

export type Contributor = {
  id: Scalars['String'];
  name: Scalars['String'];
  uri?: Maybe<Scalars['URL']>;
  avatar?: Maybe<Image>;
  /** @deprecated try to use avatar.url if possible */
  avatarUrl?: Maybe<Scalars['URL']>;
  wikidataId?: Maybe<Scalars['String']>;
};

export type Chapter = {
  start: Scalars['Duration'];
  title: Scalars['String'];
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  href?: Maybe<Scalars['URL']>;
};

export type Node = {
  nodeId: Scalars['ID'];
};

export type Organization = {
  name: Scalars['String'];
  image?: Maybe<Image>;
  uri?: Maybe<Scalars['URL']>;
  wikidataId?: Maybe<Scalars['String']>;
};

export type AudioQuery = {
  nodeId: Scalars['ID'];
  node?: Maybe<Node>;
  item?: Maybe<Item>;
  show?: Maybe<ShowType>;
  contributor?: Maybe<Contributor>;
  items?: Maybe<ItemsConnection>;
  shows?: Maybe<CollectionConnection>;
};


export type AudioQueryNodeArgs = {
  nodeId: Scalars['ID'];
};


export type AudioQueryItemArgs = {
  guid: Scalars['ID'];
};


export type AudioQueryShowArgs = {
  id: Scalars['ID'];
};


export type AudioQueryContributorArgs = {
  uri: Scalars['URL'];
};


export type AudioQueryItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<ItemsOrderBy>>;
};


export type AudioQueryShowsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
};

export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  nodes: Array<Collection>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  nodes: Array<Item>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  nodes: Array<Organization>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Cursor']>;
  endCursor?: Maybe<Scalars['Cursor']>;
};

export type StringFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  distinctFrom?: Maybe<Scalars['String']>;
  notDistinctFrom?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lessThan?: Maybe<Scalars['String']>;
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  greaterThan?: Maybe<Scalars['String']>;
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  includes?: Maybe<Scalars['String']>;
  notIncludes?: Maybe<Scalars['String']>;
  includesInsensitive?: Maybe<Scalars['String']>;
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  notStartsWith?: Maybe<Scalars['String']>;
  startsWithInsensitive?: Maybe<Scalars['String']>;
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  notEndsWith?: Maybe<Scalars['String']>;
  endsWithInsensitive?: Maybe<Scalars['String']>;
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  like?: Maybe<Scalars['String']>;
  notLike?: Maybe<Scalars['String']>;
  likeInsensitive?: Maybe<Scalars['String']>;
  notLikeInsensitive?: Maybe<Scalars['String']>;
  equalToInsensitive?: Maybe<Scalars['String']>;
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  lessThanInsensitive?: Maybe<Scalars['String']>;
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  greaterThanInsensitive?: Maybe<Scalars['String']>;
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
  nodeId: Scalars['ID'];
  externalIds?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['HTML']>;
  image?: Maybe<Image>;
  /** @deprecated try to use image.url if possible */
  imageUrl?: Maybe<Scalars['URL']>;
  link?: Maybe<Scalars['URL']>;
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
  nodeId: Scalars['ID'];
  guid: Scalars['ID'];
  externalIds?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['HTML']>;
  publicationDate: Scalars['Datetime'];
  depublicationDate?: Maybe<Scalars['Datetime']>;
  duration?: Maybe<Scalars['Duration']>;
  durationSeconds?: Maybe<Scalars['Int']>;
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
  url: Scalars['URL'];
  size: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
};

export type ContributorType = Contributor & {
  __typename?: 'ContributorType';
  id: Scalars['ID'];
  name: Scalars['String'];
  avatar?: Maybe<Image>;
  /** @deprecated try to use avatar.url if possible */
  avatarUrl?: Maybe<Scalars['URL']>;
};

export type ItemFilter = {
  id?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  groupingId?: Maybe<StringFilter>;
  episodeNumber?: Maybe<IntFilter>;
  and?: Maybe<Array<ItemFilter>>;
  or?: Maybe<Array<ItemFilter>>;
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
  nodeId: Scalars['ID'];
  name: Scalars['String'];
};

export enum OrganizationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type ShowsConnection = {
  __typename?: 'ShowsConnection';
  nodes?: Maybe<Array<ShowType>>;
};

export type Query = Node & AudioQuery & {
  __typename?: 'Query';
  query: Query;
  version?: Maybe<Scalars['Int']>;
  nodeId: Scalars['ID'];
  node?: Maybe<Node>;
  item?: Maybe<Item>;
  show?: Maybe<ShowType>;
  contributor?: Maybe<Contributor>;
  contributorById?: Maybe<Contributor>;
  organization?: Maybe<Organization>;
  items?: Maybe<ItemsConnection>;
  shows?: Maybe<ShowsConnection>;
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
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
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
  CollectionConnection: CollectionConnection;
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
  items?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType>;
};

export type PodcastResolvers<ContextType = any, ParentType extends ResolversParentTypes['Podcast'] = ResolversParentTypes['Podcast']> = {
  __resolveType: TypeResolveFn<'ShowType', ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PodcastVariant']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['ItemsConnection']>, ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  __resolveType: TypeResolveFn<'ItemType', ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<ItemExternalIdsArgs, never>>;
  episodeNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<ItemTitleArgs, never>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  nodes?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType, RequireFields<ShowTypeImageArgs, never>>;
  imageUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  _raw?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemType'] = ResolversParentTypes['ItemType']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  guid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  externalIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType, RequireFields<ItemTypeExternalIdsArgs, never>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<ItemTypeTitleArgs, never>>;
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['HTML']>, ParentType, ContextType>;
  publicationDate?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  depublicationDate?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>;
  durationSeconds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationType'] = ResolversParentTypes['OrganizationType']> = {
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShowsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShowsConnection'] = ResolversParentTypes['ShowsConnection']> = {
  nodes?: Resolver<Maybe<Array<ResolversTypes['ShowType']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  query?: Resolver<ResolversTypes['Query'], ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'nodeId'>>;
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
