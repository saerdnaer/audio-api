// tslint:disable
// @ts-nocheck
/**
 * PodcastIndex.org API
 *
 * OpenAPI spec version: 1.4.0
 * Contact: info@podcastindex.org
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

/**
 * Address of node to receive payment 
 * @export
 * @interface AddressDestination
 */
export interface AddressDestination {
}
/**
 * The seemingly best artwork we can find for the feed. Might be the same as `image` in most instances. 
 * @export
 * @interface Artwork
 */
export interface Artwork {
}
/**
 * The channel-level author element.  Usually iTunes specific, but could be from another namespace if not present. 
 * @export
 * @interface Author
 */
export interface Author {
}
/**
 * An array of categories, where the index is the Category ID and the value is the Category Name.  Category numbers and names can be found in the [Podcast Namespace documentation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/categories.json) 
 * @export
 * @interface Categories
 */
export interface Categories {
}
/**
 * Link to the JSON file containing the episode chapters 
 * @export
 * @interface ChaptersUrl
 */
export interface ChaptersUrl {
}
/**
 * The md5 hash of the following feed items in hex format.    - `title`   - `link`   - `feedLanguage`   - `generator`   - `author`   - `ownerName`   - `ownerEmail` (note: not exposed via the API)  Pseudo-code:        chash = md5(title+link+feedLanguage+generator+author+ownerName+ownerEmail) 
 * @export
 * @interface Chash
 */
export interface Chash {
}
/**
 * Hash of the entire feed body 
 * @export
 * @interface ContentHash
 */
export interface ContentHash {
}
/**
 * The Content-Type header from the last time we pulled this feed from its url. 
 * @export
 * @interface ContentType
 */
export interface ContentType {
}
/**
 * Number of items returned in request 
 * @export
 * @interface Count
 */
export interface Count {
}
/**
 * The number of errors we’ve encountered trying to pull a copy of the feed. Errors are things like a 500 or 404 response, a server timeout, bad encoding, etc. 
 * @export
 * @interface CrawlErrors
 */
export interface CrawlErrors {
}
/**
 * The time this episode was found in the feed 
 * @export
 * @interface DateCrawled
 */
export interface DateCrawled {
}
/**
 * The date and time the episode was published 
 * @export
 * @interface DatePublished
 */
export interface DatePublished {
}
/**
 * The date and time the episode was published formatted as a human readable string.  Note: uses the PodcastIndex server local time to do conversion. 
 * @export
 * @interface DatePublishedPretty
 */
export interface DatePublishedPretty {
}
/**
 * At some point, we give up trying to process a feed and mark it as dead. This is usually after 1000 errors without a successful pull/parse cycle. Once the feed is marked dead, we only check it once per month. 
 * @export
 * @interface Dead
 */
export interface Dead {
}
/**
 * The item-level description of the episode 
 * @export
 * @interface DescriptionEpisode
 */
export interface DescriptionEpisode {
}
/**
 * The channel-level description 
 * @export
 * @interface DescriptionFeed
 */
export interface DescriptionFeed {
}
/**
 * Description of the response 
 * @export
 * @interface DescriptionResponse
 */
export interface DescriptionResponse {
}
/**
 * Destination for \"Value for Value\" payment. 
 * @export
 * @interface DestinationV4v
 */
export interface DestinationV4v {
    name: NameDestination;
    address: AddressDestination;
    type: TypeDestination;
    split: SplitDestination;
    fee: FeeDestination;
}
/**
 * List of destinations where \"Value for Value\" payments should be sent. 
 * @export
 * @interface DestinationsV4v
 */
export interface DestinationsV4v extends Array<DestinationV4v> {
}
/**
 * The estimated length of the item specified by the `enclosureUrl` in minutes 
 * @export
 * @interface Duration
 */
export interface Duration {
}
/**
 * The length to play the item specified by the `enclosureUrl` 
 * @export
 * @interface DurationSoundbite
 */
export interface DurationSoundbite {
}
/**
 * The length of the item specified by the `enclosureUrl` in bytes 
 * @export
 * @interface EnclosureLength
 */
export interface EnclosureLength {
}
/**
 * The Content-Type for the item specified by the `enclosureUrl` 
 * @export
 * @interface EnclosureType
 */
export interface EnclosureType {
}
/**
 * URL/link to the episode file 
 * @export
 * @interface EnclosureUrl
 */
export interface EnclosureUrl {
}
/**
 * Number of episodes for this feed known to the index. 
 * @export
 * @interface EpisodeCount
 */
export interface EpisodeCount {
}
/**
 * Episode number 
 * @export
 * @interface EpisodeNumber
 */
export interface EpisodeNumber {
}
/**
 * Episode data 
 * @export
 * @interface EpisodeObject
 */
export interface EpisodeObject {
    id: IdEpisode;
    title: TitleFeed;
    link: LinkFeed;
    description: DescriptionEpisode;
    guid: Guid;
    datePublished: DatePublished;
    datePublishedPretty: DatePublishedPretty;
    dateCrawled: DateCrawled;
    enclosureUrl: EnclosureUrl;
    enclosureType: EnclosureType;
    enclosureLength: EnclosureLength;
    duration: Duration;
    explicit: Explicit;
    episode: EpisodeNumber;
    episodeType: EpisodeType;
    season: Season;
    image: ImageEpisode;
    feedItunesId: ItunesIdFeed;
    feedImage: ImageFeed;
    feedId: IdFeed;
    feedTitle: TitleFeed;
    feedLanguage: Language;
    chaptersUrl: ChaptersUrl;
    transcriptUrl: TranscriptUrl;
    soundbite: Soundbite;
    soundbites: Soundbites;
}
/**
 * The type of episode 
 * @export
 * @enum {string}
 */
export const EpisodeType = {
    Full:'full',
    Trailer:'trailer',
    Bonus:'bonus'
} as const

export type EpisodeType = typeof EpisodeType[keyof typeof EpisodeType]
/**
 * List of episodes matching request 
 * @export
 * @interface EpisodesRandomArray
 */
export interface EpisodesRandomArray extends Array<ItemPodcastRandom> {
}
/**
 * Indicates if feed already exists in the index 
 * @export
 * @enum {string}
 */
export const Existed = {
    True:'true',
    False:'false'
} as const

export type Existed = typeof Existed[keyof typeof Existed]
/**
 * Is episode marked as explicit    - 0: not marked explicit   - 1: marked explicit 
 * @export
 * @enum {string}
 */
export const Explicit = {
    NUMBER_0:0,
    NUMBER_1:1
} as const

export type Explicit = typeof Explicit[keyof typeof Explicit]
/**
 * Indicates if destination is included due to a fee being charged 
 * @export
 * @interface FeeDestination
 */
export interface FeeDestination {
}
/**
 * 
 * @export
 * @interface FeedBytag
 */
export interface FeedBytag {
    id: IdFeed;
    title: TitleFeed;
    url: UrlFeed;
    originalUrl: OriginalUrl;
    link: LinkFeed;
    description: DescriptionFeed;
    author: Author;
    ownerName: OwnerName;
    image: ImageFeed;
    artwork: Artwork;
    lastUpdateTime: LastUpdateTime;
    lastCrawlTime: LastCrawlTime;
    lastParseTime: LastParseTime;
    lastGoodHttpStatusTime: LastGoodHttpStatusTime;
    lastHttpStatus: LastHttpStatus;
    contentType: ContentType;
    itunesId: ItunesIdFeed;
    generator: Generator;
    language: Language;
    type: Type;
    dead: Dead;
    crawlErrors: CrawlErrors;
    parseErrors: ParseErrors;
    categories: Categories;
    locked: Locked;
    imageUrlHash: ImageUrlHash;
    value: Value;
    funding: Funding;
}
/**
 * 
 * @export
 * @interface FeedDead
 */
export interface FeedDead {
    id: IdFeed;
    url: UrlFeed;
}
/**
 * Known details of podcast feed 
 * @export
 * @interface FeedItunes
 */
export interface FeedItunes {
    id: IdFeed;
    title: TitleFeed;
    url: UrlFeed;
    originalUrl: OriginalUrl;
    link: LinkFeed;
    description: DescriptionFeed;
    author: Author;
    ownerName: OwnerName;
    image: ImageFeed;
    artwork: Artwork;
    lastUpdateTime: LastUpdateTime;
    lastCrawlTime: LastCrawlTime;
    lastParseTime: LastParseTime;
    lastGoodHttpStatusTime: LastGoodHttpStatusTime;
    lastHttpStatus: LastHttpStatus;
    contentType: ContentType;
    itunesId: ItunesIdFeed;
    generator: Generator;
    language: Language;
    type: Type;
    dead: Dead;
    crawlErrors: CrawlErrors;
    parseErrors: ParseErrors;
    locked: Locked;
}
/**
 * Known details of podcast feed 
 * @export
 * @interface FeedPodcast
 */
export interface FeedPodcast {
    id: IdFeed;
    title: TitleFeed;
    url: UrlFeed;
    originalUrl: OriginalUrl;
    link: LinkFeed;
    description: DescriptionFeed;
    author: Author;
    ownerName: OwnerName;
    image: ImageFeed;
    artwork: Artwork;
    lastUpdateTime: LastUpdateTime;
    lastCrawlTime: LastCrawlTime;
    lastParseTime: LastParseTime;
    lastGoodHttpStatusTime: LastGoodHttpStatusTime;
    lastHttpStatus: LastHttpStatus;
    contentType: ContentType;
    itunesId: ItunesIdFeed;
    generator: Generator;
    language: Language;
    type: Type;
    dead: Dead;
    chash: Chash;
    episodeCount: EpisodeCount;
    crawlErrors: CrawlErrors;
    parseErrors: ParseErrors;
    categories: Categories;
    locked: Locked;
    imageUrlHash: ImageUrlHash;
    value: Value;
    funding: Funding;
}
/**
 * 
 * @export
 * @interface FeedSearch
 */
export interface FeedSearch {
    id: IdFeed;
    title: TitleFeed;
    url: UrlFeed;
    originalUrl: OriginalUrl;
    link: LinkFeed;
    description: DescriptionFeed;
    author: Author;
    ownerName: OwnerName;
    image: ImageFeed;
    artwork: Artwork;
    lastUpdateTime: LastUpdateTime;
    lastCrawlTime: LastCrawlTime;
    lastParseTime: LastParseTime;
    lastGoodHttpStatusTime: LastGoodHttpStatusTime;
    lastHttpStatus: LastHttpStatus;
    contentType: ContentType;
    itunesId: ItunesIdFeed;
    generator: Generator;
    language: Language;
    type: Type;
    dead: Dead;
    crawlErrors: CrawlErrors;
    parseErrors: ParseErrors;
    categories: Categories;
    locked: Locked;
    imageUrlHash: ImageUrlHash;
}
/**
 * 
 * @export
 * @interface FeedTrending
 */
export interface FeedTrending {
    id: IdFeed;
    url: UrlFeed;
    title: TitleFeed;
    author: Author;
    image: ImageFeed;
    newestItemPublishedTime: NewestItemPublishedTime;
    itunesId: ItunesIdFeed;
    trendScore: TrendScore;
    language: Language;
    categories: Categories;
}
/**
 * List of feeds matching request 
 * @export
 * @interface Feeds
 */
export interface Feeds extends Array<FeedSearch> {
}
/**
 * List of feeds matching request 
 * @export
 * @interface FeedsBytag
 */
export interface FeedsBytag extends Array<FeedBytag> {
}
/**
 * List of feeds matching request 
 * @export
 * @interface FeedsDead
 */
export interface FeedsDead extends Array<FeedDead> {
}
/**
 * List of feeds matching request 
 * @export
 * @interface FeedsRecent
 */
export interface FeedsRecent extends Array<FeedsRecentInner> {
}
/**
 * 
 * @export
 * @interface FeedsRecentInner
 */
export interface FeedsRecentInner {
    id: IdFeed;
    url: UrlFeed;
    title: TitleFeed;
    newestItemPublishedTime: NewestItemPublishedTime;
    itunesId: ItunesIdFeed;
    language: Language;
    categories: Categories;
}
/**
 * List of feeds matching request 
 * @export
 * @interface FeedsRecentNew
 */
export interface FeedsRecentNew extends Array<FeedsRecentNewInner> {
}
/**
 * 
 * @export
 * @interface FeedsRecentNewInner
 */
export interface FeedsRecentNewInner {
    id: IdFeed;
    url: UrlFeed;
    timeAdded: TimeAdded;
    status: StatusFeed;
    contentHash: ContentHash;
    language: Language;
}
/**
 * List of feeds matching request 
 * @export
 * @interface FeedsTrending
 */
export interface FeedsTrending extends Array<FeedTrending> {
}
/**
 * Information for donation/funding the podcast.  See the [podcast namespace spec](https://podcastindex.org/namespace/1.0#funding) for more information. 
 * @export
 * @interface Funding
 */
export interface Funding {
    url: UrlFunding;
    message: Message;
}
/**
 * The channel-level generator element if there is one. 
 * @export
 * @interface Generator
 */
export interface Generator {
}
/**
 * The unique identifier for the episode 
 * @export
 * @interface Guid
 */
export interface Guid {
}
/**
 * The internal PodcastIndex.org episode ID. 
 * @export
 * @interface IdEpisode
 */
export interface IdEpisode {
}
/**
 * The internal PodcastIndex.org Feed ID. 
 * @export
 * @interface IdFeed
 */
export interface IdFeed {
}
/**
 * Value passed to request in the `id` field 
 * @export
 * @interface IdQuery
 */
export interface IdQuery {
}
/**
 * The item-level image for the episode 
 * @export
 * @interface ImageEpisode
 */
export interface ImageEpisode {
}
/**
 * The channel-level image element. 
 * @export
 * @interface ImageFeed
 */
export interface ImageFeed {
}
/**
 * A CRC32 hash of the `image` URL with the protocol (`http://`, `https://`) removed. Can be used to retrieve a resized/converted version of the image specified by `image` from https://podcastimages.com/.  Using the format: `https://podcastimages.com/<hash>_<size>.jpg` Replace `<hash>` with the value in this field. The `<size>` is the desired image width/height. Ex: `https://podcastimages.com/1011338142_600.jpg`  **Work in Progress**: the `podcastimages.com` system is currently not working. 
 * @export
 * @interface ImageUrlHash
 */
export interface ImageUrlHash {
}
/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    status: Status;
    feeds: Feeds;
    count: Count;
    query: QuerySearch;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    status: Status;
    items: ItemsByperson;
    count: Count;
    query: QuerySearch;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20010
 */
export interface InlineResponse20010 {
    status: Status;
    items: ItemsPodcast;
    count: Count;
    query: IdQuery;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
    status: Status;
    id: IdEpisode;
    episode: EpisodeObject;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20012
 */
export interface InlineResponse20012 {
    status: Status;
    episodes: EpisodesRandomArray;
    count: Count;
    max: Max;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20013
 */
export interface InlineResponse20013 {
    status: Status;
    items: ItemsRecent;
    count: Count;
    max: Max;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20014
 */
export interface InlineResponse20014 {
    status: Status;
    feeds: FeedsRecent;
    count: Count;
    max: Max;
    since: Since;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20015
 */
export interface InlineResponse20015 {
    status: Status;
    feeds: FeedsRecentNew;
    count: Count;
    max: Max;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20016
 */
export interface InlineResponse20016 {
    status: Status;
    items: ItemsSoundbites;
    count: Count;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20017
 */
export interface InlineResponse20017 {
    status: Status;
    query: QueryId;
    value: Value;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20018
 */
export interface InlineResponse20018 {
    status: Status;
    query: QueryUrl;
    value: Value;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20019
 */
export interface InlineResponse20019 {
    status: Status;
    stats: Stats;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
    status: Status;
    query: QueryId;
    feed: FeedPodcast;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20020
 */
export interface InlineResponse20020 {
    status: Status;
    feedId: IdFeed;
    existed: Existed;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse20021
 */
export interface InlineResponse20021 {
    status: Status;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    status: Status;
    query: QueryUrl;
    feed: FeedPodcast;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2004
 */
export interface InlineResponse2004 {
    status: Status;
    query: QueryId;
    feed: FeedItunes;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
    status: Status;
    feeds: FeedsBytag;
    count: Count;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2006
 */
export interface InlineResponse2006 {
    status: Status;
    feeds: FeedsTrending;
    count: Count;
    max: Max;
    since: Since;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
    status: Status;
    feeds: FeedsDead;
    count: Count;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    status: Status;
    items: ItemsPodcast;
    count: Count;
    query: QueryPodcastIdSingle | QueryPodcastIdMultiple;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface InlineResponse2009
 */
export interface InlineResponse2009 {
    status: Status;
    items: ItemsPodcast;
    count: Count;
    query: QueryUrl;
    description: DescriptionResponse;
}
/**
 * 
 * @export
 * @interface ItemPodcast
 */
export interface ItemPodcast {
    id: IdEpisode;
    title: TitleFeed;
    link: LinkFeed;
    description: DescriptionEpisode;
    guid: Guid;
    datePublished: DatePublished;
    datePublishedPretty: DatePublishedPretty;
    dateCrawled: DateCrawled;
    enclosureUrl: EnclosureUrl;
    enclosureType: EnclosureType;
    enclosureLength: EnclosureLength;
    duration: Duration;
    explicit: Explicit;
    episode: EpisodeNumber;
    episodeType: EpisodeType;
    season: Season;
    image: ImageEpisode;
    feedItunesId: ItunesIdFeed;
    feedImage: ImageFeed;
    feedId: IdFeed;
    feedLanguage: Language;
    chaptersUrl: ChaptersUrl;
    transcriptUrl: TranscriptUrl;
    soundbite: Soundbite;
    soundbites: Soundbites;
}
/**
 * 
 * @export
 * @interface ItemPodcastRandom
 */
export interface ItemPodcastRandom {
    id: IdEpisode;
    title: TitleFeed;
    link: LinkFeed;
    description: DescriptionEpisode;
    guid: Guid;
    datePublished: DatePublished;
    datePublishedPretty: DatePublishedPretty;
    dateCrawled: DateCrawled;
    enclosureUrl: EnclosureUrl;
    enclosureType: EnclosureType;
    enclosureLength: EnclosureLength;
    explicit: Explicit;
    episode: EpisodeNumber;
    episodeType: EpisodeType;
    season: Season;
    image: ImageEpisode;
    feedItunesId: ItunesIdFeed;
    feedImage: ImageFeed;
    feedId: IdFeed;
    feedTitle: TitleFeed;
    feedLanguage: Language;
    categories: Categories;
    chaptersUrl: ChaptersUrl;
}
/**
 * 
 * @export
 * @interface ItemPodcastRecent
 */
export interface ItemPodcastRecent {
    id: IdEpisode;
    title: TitleFeed;
    link: LinkFeed;
    description: DescriptionEpisode;
    guid: Guid;
    datePublished: DatePublished;
    datePublishedPretty: DatePublishedPretty;
    dateCrawled: DateCrawled;
    enclosureUrl: EnclosureUrl;
    enclosureType: EnclosureType;
    enclosureLength: EnclosureLength;
    explicit: Explicit;
    episode: EpisodeNumber;
    episodeType: EpisodeType;
    season: Season;
    image: ImageEpisode;
    feedItunesId: ItunesIdFeed;
    feedImage: ImageFeed;
    feedId: IdFeed;
    feedTitle: TitleFeed;
    feedLanguage: Language;
}
/**
 * 
 * @export
 * @interface ItemSearchByperson
 */
export interface ItemSearchByperson {
    id: IdEpisode;
    title: TitleFeed;
    link: LinkFeed;
    description: DescriptionEpisode;
    guid: Guid;
    datePublished: DatePublished;
    dateCrawled: DateCrawled;
    enclosureUrl: EnclosureUrl;
    enclosureType: EnclosureType;
    enclosureLength: EnclosureLength;
    duration: Duration;
    explicit: Explicit;
    episode: EpisodeNumber;
    episodeType: EpisodeType;
    season: Season;
    image: ImageEpisode;
    feedItunesId: ItunesIdFeed;
    feedImage: ImageFeed;
    feedId: IdFeed;
    feedUrl: UrlFeed;
    feedAuthor: Author;
    feedTitle: TitleFeed;
    feedLanguage: Language;
    chaptersUrl: ChaptersUrl;
    transcriptUrl: TranscriptUrl;
}
/**
 * List of episodes matching request 
 * @export
 * @interface ItemsByperson
 */
export interface ItemsByperson extends Array<ItemSearchByperson> {
}
/**
 * List of episodes matching request 
 * @export
 * @interface ItemsPodcast
 */
export interface ItemsPodcast extends Array<ItemPodcast> {
}
/**
 * List of episodes matching request 
 * @export
 * @interface ItemsRecent
 */
export interface ItemsRecent extends Array<ItemPodcastRecent> {
}
/**
 * List of soundbites matching request 
 * @export
 * @interface ItemsSoundbites
 */
export interface ItemsSoundbites extends Array<ItemsSoundbitesInner> {
}
/**
 * 
 * @export
 * @interface ItemsSoundbitesInner
 */
export interface ItemsSoundbitesInner {
    enclosureUrl: EnclosureUrl;
    title: TitleSoundbite;
    startTime: StartTime;
    duration: DurationSoundbite;
    episodeId: IdEpisode;
    episodeTitle: TitleEpisode;
    feedTitle: TitleFeed;
    feedUrl: UrlFeed;
    feedId: IdFeed;
}
/**
 * The iTunes ID of this feed if there is one, and we know what it is. 
 * @export
 * @interface ItunesIdFeed
 */
export interface ItunesIdFeed {
}
/**
 * The channel-level language specification of the feed. Languages accord with the [RSS Language Spec](https://www.rssboard.org/rss-language-codes). 
 * @export
 * @interface Language
 */
export interface Language {
}
/**
 * The last time we attempted to pull this feed from its url. 
 * @export
 * @interface LastCrawlTime
 */
export interface LastCrawlTime {
}
/**
 * Timestamp of the last time we got a \"good\", meaning non-4xx/non-5xx, status code when pulling this feed from its url. 
 * @export
 * @interface LastGoodHttpStatusTime
 */
export interface LastGoodHttpStatusTime {
}
/**
 * The last http status code we got when pulling this feed from its url.  You will see some made up status codes sometimes. These are what we use to track state within the feed puller. These all start with 9xx. 
 * @export
 * @interface LastHttpStatus
 */
export interface LastHttpStatus {
}
/**
 * The last time we tried to parse the downloaded feed content. 
 * @export
 * @interface LastParseTime
 */
export interface LastParseTime {
}
/**
 * The channel-level pubDate for the feed, if it’s sane. If not, this is a heuristic value, arrived at by analyzing other parts of the feed, like item-level pubDates. 
 * @export
 * @interface LastUpdateTime
 */
export interface LastUpdateTime {
}
/**
 * The channel-level link in the feed 
 * @export
 * @interface LinkFeed
 */
export interface LinkFeed {
}
/**
 * Tell other podcast platforms whether they are allowed to import this feed. A value of 1 means that any attempt to import this feed into a new platform should be rejected. Contains the value of the feed's channel-level `podcast:locked` tag where:    - 0: 'no'   - 1: 'yes' 
 * @export
 * @enum {string}
 */
export const Locked = {
    NUMBER_0:0,
    NUMBER_1:1
} as const

export type Locked = typeof Locked[keyof typeof Locked]
/**
 * Value of `max` parameter passed to request. 
 * @export
 * @interface Max
 */
export interface Max {
}
/**
 * Description of `url`  See the [podcast namespace spec](https://podcastindex.org/namespace/1.0#funding) for more information. 
 * @export
 * @interface Message
 */
export interface Message {
}
/**
 * Method for sending payment 
 * @export
 * @interface MethodV4v
 */
export interface MethodV4v {
}
/**
 * Description of the method for providing \"Value for Value\" payments 
 * @export
 * @interface ModelV4v
 */
export interface ModelV4v {
    type: TypeV4v;
    method: MethodV4v;
    suggested: SuggestedV4v;
}
/**
 * Name for the destination 
 * @export
 * @interface NameDestination
 */
export interface NameDestination {
}
/**
 * The date and time the most recent episode in the feed was published 
 * @export
 * @interface NewestItemPublishedTime
 */
export interface NewestItemPublishedTime {
}
/**
 * The URL of the feed, before it changed to the current `url` value. 
 * @export
 * @interface OriginalUrl
 */
export interface OriginalUrl {
}
/**
 * The channel-level owner:name element.  Usually iTunes specific, but could be from another namespace if not present. 
 * @export
 * @interface OwnerName
 */
export interface OwnerName {
}
/**
 * The number of errors we’ve encountered trying to parse the feed content. Errors here are things like not well-formed xml, bad character encoding, etc.  We fix many of these types of issues on the fly when parsing. We only increment the errors count when we can’t fix it. 
 * @export
 * @interface ParseErrors
 */
export interface ParseErrors {
}
/**
 * Object containing the input query data 
 * @export
 * @interface QueryId
 */
export interface QueryId {
    id: IdQuery;
}
/**
 * IDs passed to request 
 * @export
 * @interface QueryPodcastIdMultiple
 */
export interface QueryPodcastIdMultiple extends Array<string> {
}
/**
 * Single ID passed to request 
 * @export
 * @interface QueryPodcastIdSingle
 */
export interface QueryPodcastIdSingle {
}
/**
 * Search terms passed to request 
 * @export
 * @interface QuerySearch
 */
export interface QuerySearch {
}
/**
 * Object containing the input query data 
 * @export
 * @interface QueryUrl
 */
export interface QueryUrl {
    url: UrlQuery;
}
/**
 * Season number 
 * @export
 * @interface Season
 */
export interface Season {
}
/**
 * Value of `since` parameter passed to request. 
 * @export
 * @interface Since
 */
export interface Since {
}
/**
 * Soundbite for episode 
 * @export
 * @interface Soundbite
 */
export interface Soundbite {
    startTime: StartTime;
    duration: DurationSoundbite;
    title: TitleSoundbite;
}
/**
 * Soundbites for episode 
 * @export
 * @interface Soundbites
 */
export interface Soundbites extends Array<Soundbite> {
}
/**
 * Share of payment the destination should receive 
 * @export
 * @interface SplitDestination
 */
export interface SplitDestination {
}
/**
 * The time where the soundbite begins in the item specified by the `enclosureUrl` 
 * @export
 * @interface StartTime
 */
export interface StartTime {
}
/**
 * An array statistic properties 
 * @export
 * @interface Stats
 */
export interface Stats {
    feedCountTotal: number;
    episodeCountTotal: number;
    feedsWithNewEpisodes3days: number;
    feedsWithNewEpisodes10days: number;
    feedsWithNewEpisodes30days: number;
    feedsWithNewEpisodes90days: number;
}
/**
 * Indicates API request status 
 * @export
 * @enum {string}
 */
export const Status = {
    True:'true',
    False:'false'
} as const

export type Status = typeof Status[keyof typeof Status]
/**
 * Status of feed after being added to index 
 * @export
 * @enum {string}
 */
export const StatusFeed = {
    Unconfirmed:'unconfirmed',
    Confirmed:'confirmed'
} as const

export type StatusFeed = typeof StatusFeed[keyof typeof StatusFeed]
/**
 * Suggested amount per second of playback to send. Unit is specific to the `type`. 
 * @export
 * @interface SuggestedV4v
 */
export interface SuggestedV4v {
}
/**
 * The date and time the feed was added to the index 
 * @export
 * @interface TimeAdded
 */
export interface TimeAdded {
}
/**
 * Name of the episode 
 * @export
 * @interface TitleEpisode
 */
export interface TitleEpisode {
}
/**
 * Name of the feed 
 * @export
 * @interface TitleFeed
 */
export interface TitleFeed {
}
/**
 * Name of the soundbite 
 * @export
 * @interface TitleSoundbite
 */
export interface TitleSoundbite {
}
/**
 * Link to the file containing the episode transcript 
 * @export
 * @interface TranscriptUrl
 */
export interface TranscriptUrl {
}
/**
 * The ranking for how the podcast is trending in the index 
 * @export
 * @interface TrendScore
 */
export interface TrendScore {
}
/**
 * Type of source feed where:    - 0: RSS   - 1: Atom 
 * @export
 * @enum {string}
 */
export const Type = {
    NUMBER_0:0,
    NUMBER_1:1
} as const

export type Type = typeof Type[keyof typeof Type]
/**
 * Type of destination 
 * @export
 * @enum {string}
 */
export const TypeDestination = {
    Node:'node'
} as const

export type TypeDestination = typeof TypeDestination[keyof typeof TypeDestination]
/**
 * Payment type 
 * @export
 * @enum {string}
 */
export const TypeV4v = {
    Lightning:'lightning',
    Hive:'hive',
    Webmonetization:'webmonetization'
} as const

export type TypeV4v = typeof TypeV4v[keyof typeof TypeV4v]
/**
 * Current feed URL 
 * @export
 * @interface UrlFeed
 */
export interface UrlFeed {
}
/**
 * URL to site to fund the podcast  See the [podcast namespace spec](https://podcastindex.org/namespace/1.0#funding) for more information. 
 * @export
 * @interface UrlFunding
 */
export interface UrlFunding {
}
/**
 * Value passed to request in the `url` field 
 * @export
 * @interface UrlQuery
 */
export interface UrlQuery {
}
/**
 * Information for supporting the podcast via one of the \"Value for Value\" methods.  Examples:   - `lightning` value type: https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=169991&pretty   - `webmonetization` value type: https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=779873&pretty 
 * @export
 * @interface Value
 */
export interface Value {
    model: ModelV4v;
    destinations: DestinationsV4v;
}




