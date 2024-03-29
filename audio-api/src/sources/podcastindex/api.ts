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

import { UserInputError } from "apollo-server";
import { RESTDataSource } from "apollo-datasource-rest";

import { Configuration } from "./configuration";
import "./types";

export class PodcastIndexSource extends RESTDataSource {
    constructor(baseUrl?: string) {
        super();
        this.baseURL = "https://api.podcastindex.org/api/1.0";
    }
    /**
     * This call adds a podcast to the index using its feed url. If a feed already exists, you will get its existing Feed ID returned.  **NOTE**: this endpoint requires an APIKey with the **write** permission.  Example: https://api.podcastindex.org/api/1.0/add/byfeedurl?url=https://feeds.theincomparable.com/batmanuniversity&pretty
     * @summary By Feed URL
     * @param {string} url Podcast feed URL
     * @param {number} [itunesid] If this parameter is given, and the existing feed has no associated iTunes ID, it will be associated with this ID. If an existing iTunes ID is already associated with this feed it will **NOT** be changed.
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    addbyfeedurlPost(url: string, itunesid?: number, pretty?: boolean): Promise<InlineResponse20020> {
        // verify required parameter 'url' is not null or undefined
        if (!url) {
            throw new UserInputError('Required parameter url was null or undefined when calling addbyfeedurlPost.');
        }
        return this.post(`/add/byfeedurl`, { url, itunesid, pretty });
    }
    /**
     * This call adds a podcast to the index using its iTunes ID. If a feed already exists, it will be noted in the response.  **NOTE**: this endpoint requires an APIKey with the **write** permission.  Example: https://api.podcastindex.org/api/1.0/add/byitunesid?id=1441923632&pretty
     * @summary By iTunes ID
     * @param {number} [id] The iTunes ID to add
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    addbyitunesidPost(id?: number, pretty?: boolean): Promise<InlineResponse20021> {
        return this.post(`/add/byitunesid`, { id, pretty });
    }
    /**
     * This call returns all the episodes we know about for this feed from the PodcastIndex ID. Episodes are in reverse chronological order.  Examples:    - https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=75075&pretty   - https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=41504,920666&pretty   - Includes `persons`: https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=169991&pretty
     * @summary By Feed ID
     * @param {string} id The PodcastIndex Feed ID or IDs to search for.  If searching for multiple IDs, separate values with a comma. A maximum of 200 IDs can be provided.
     * @param {number} [since] Return items since the specified time. The value can be a unix epoch timestamp or a negative integer that represents a number of seconds prior to right now.
     * @param {number} [max] Maximum number of results to return.
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    episodesbyfeedid(id: string, since?: number, max?: number, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse2008> {
        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new UserInputError('Required parameter id was null or undefined when calling episodesbyfeedid.');
        }
        return this.get(`/episodes/byfeedid`, { id, since, max, fulltext, pretty });
    }
    /**
     * This call returns all the episodes we know about for this feed from the feed URL. Episodes are in reverse chronological order.  Examples:    - https://api.podcastindex.org/api/1.0/episodes/byfeedurl?url=https://feeds.theincomparable.com/batmanuniversity&pretty   - Includes `persons`: https://api.podcastindex.org/api/1.0/episodes/byfeedurl?url=https://engineered.network/pragmatic/feed/index.xml&pretty
     * @summary By Feed URL
     * @param {string} url Podcast feed URL
     * @param {number} [since] Return items since the specified time. The value can be a unix epoch timestamp or a negative integer that represents a number of seconds prior to right now.
     * @param {number} [max] Maximum number of results to return.
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    episodesbyfeedurl(url: string, since?: number, max?: number, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse2009> {
        // verify required parameter 'url' is not null or undefined
        if (!url) {
            throw new UserInputError('Required parameter url was null or undefined when calling episodesbyfeedurl.');
        }
        return this.get(`/episodes/byfeedurl`, { url, since, max, fulltext, pretty });
    }
    /**
     * Get all the metadata for a single episode by passing its id.  Example: https://api.podcastindex.org/api/1.0/episodes/byid?id=16795090&pretty
     * @summary By ID
     * @param {number} id The PodcastIndex episode ID to search for.
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    episodesbyid(id: number, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse20011> {
        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new UserInputError('Required parameter id was null or undefined when calling episodesbyid.');
        }
        return this.get(`/episodes/byid`, { id, fulltext, pretty });
    }
    /**
     * This call returns all the episodes we know about for this feed from the iTunes ID. Episodes are in reverse chronological order.  Example: https://api.podcastindex.org/api/1.0/episodes/byitunesid?id=1441923632&pretty
     * @summary By iTunes ID
     * @param {number} id The iTunes Feed ID to search for
     * @param {number} [since] Return items since the specified time. The value can be a unix epoch timestamp or a negative integer that represents a number of seconds prior to right now.
     * @param {number} [max] Maximum number of results to return.
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    episodesbyitunesid(id: number, since?: number, max?: number, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse20010> {
        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new UserInputError('Required parameter id was null or undefined when calling episodesbyitunesid.');
        }
        return this.get(`/episodes/byitunesid`, { id, since, max, fulltext, pretty });
    }
    /**
     * This call returns a random batch of episodes, in no specific order.  Examples:    - https://api.podcastindex.org/api/1.0/episodes/random?notcat=News,Religion&lang=en,es&pretty   - https://api.podcastindex.org/api/1.0/episodes/random?max=2&pretty
     * @summary Random
     * @param {number} [max] Maximum number of results to return.
     * @param {string} [lang] Specifying a language code (like \&quot;en\&quot;) will return only episodes having that specific language.  You can specify multiple languages by separating them with commas.  If you also want to return episodes that have no language given, use the token \&quot;unknown\&quot;. (ex. en,es,ja,unknown).  Values are not case sensitive.
     * @param {string} [cat] Use this argument to specify that you **ONLY** want episodes with these categories in the results.  Separate multiple categories with commas.  You may specify either the Category ID and/or the Category Name.  Values are not case sensitive.  The &#x60;cat&#x60; and &#x60;notcat&#x60; filters can be used together to fine tune a very specific result set.  Category numbers and names can be found in the [Podcast Namespace documentation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/categories.json)
     * @param {string} [notcat] Use this argument to specify categories of episodes to **NOT** show in the results.  Separate multiple categories with commas.  You may specify either the Category ID and/or the Category Name.  Values are not case sensitive.  The &#x60;cat&#x60; and &#x60;notcat&#x60; filters can be used together to fine tune a very specific result set.  Category numbers and names can be found in the [Podcast Namespace documentation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/categories.json)
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    episodesrandom(max?: number, lang?: string, cat?: string, notcat?: string, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse20012> {
        return this.get(`/episodes/random`, { max, lang, cat, notcat, fulltext, pretty });
    }
    /**
     * This call returns everything we know about the feed from the PodcastIndex ID  Examples:    - https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=75075&pretty   - Includes `value` and `funding`: https://api.podcastindex.org/api/1.0/podcasts/byfeedid?id=169991&pretty
     * @summary By Feed ID
     * @param {number} id The PodcastIndex Feed ID to search for
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    podcastsbyfeedid(id: number, pretty?: boolean): Promise<InlineResponse2002> {
        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new UserInputError('Required parameter id was null or undefined when calling podcastsbyfeedid.');
        }
        return this.get(`/podcasts/byfeedid`, { id, pretty });
    }
    /**
     * This call returns everything we know about the feed from the feed URL  Examples:    - https://api.podcastindex.org/api/1.0/podcasts/byfeedurl?url=https://feeds.theincomparable.com/batmanuniversity&pretty   - Includes `value` and `funding`: https://api.podcastindex.org/api/1.0/podcasts/byfeedurl?url=https://engineered.network/pragmatic/feed/index.xml&pretty
     * @summary By Feed URL
     * @param {string} url Podcast feed URL
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    podcastsbyfeedurl(url: string, pretty?: boolean): Promise<InlineResponse2003> {
        // verify required parameter 'url' is not null or undefined
        if (!url) {
            throw new UserInputError('Required parameter url was null or undefined when calling podcastsbyfeedurl.');
        }
        return this.get(`/podcasts/byfeedurl`, { url, pretty });
    }
    /**
     * This call returns everything we know about the feed from the iTunes ID  Example: https://api.podcastindex.org/api/1.0/podcasts/byitunesid?id=1441923632&pretty
     * @summary By iTunes ID
     * @param {number} id The iTunes Feed ID to search for
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    podcastsbyitunesid(id: number, pretty?: boolean): Promise<InlineResponse2004> {
        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new UserInputError('Required parameter id was null or undefined when calling podcastsbyitunesid.');
        }
        return this.get(`/podcasts/byitunesid`, { id, pretty });
    }
    /**
     * This call returns all feeds that support the specified [podcast namespace](https://podcastindex.org/namespace/1.0) tag.  Example: https://api.podcastindex.org/api/1.0/podcasts/bytag?podcast-value&pretty
     * @summary By Tag
     * @param {boolean} podcastValue Get feeds supporting the &#x60;value&#x60; tag.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    podcastsbytag(podcastValue: boolean, pretty?: boolean): Promise<InlineResponse2005> {
        // verify required parameter 'podcastValue' is not null or undefined
        if (!podcastValue) {
            throw new UserInputError('Required parameter podcastValue was null or undefined when calling podcastsbytag.');
        }
        return this.get(`/podcasts/bytag`, { podcastValue, pretty });
    }
    /**
     * This call returns all feeds that have been marked dead (`dead` == 1)  Example: https://api.podcastindex.org/api/1.0/podcasts/dead?pretty
     * @summary Dead
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    podcastsdead(pretty?: boolean): Promise<InlineResponse2007> {
        return this.get(`/podcasts/dead`, { pretty });
    }
    /**
     * This call returns the podcasts/feeds that in the index that are trending.  Example: https://api.podcastindex.org/api/1.0/podcasts/trending?pretty
     * @summary Trending
     * @param {number} [max] Maximum number of results to return.
     * @param {number} [since] Return items since the specified time. The value can be a unix epoch timestamp or a negative integer that represents a number of seconds prior to right now.
     * @param {string} [lang] Specifying a language code (like \&quot;en\&quot;) will return only episodes having that specific language.  You can specify multiple languages by separating them with commas.  If you also want to return episodes that have no language given, use the token \&quot;unknown\&quot;. (ex. en,es,ja,unknown).  Values are not case sensitive.
     * @param {string} [cat] Use this argument to specify that you **ONLY** want episodes with these categories in the results.  Separate multiple categories with commas.  You may specify either the Category ID and/or the Category Name.  Values are not case sensitive.  The &#x60;cat&#x60; and &#x60;notcat&#x60; filters can be used together to fine tune a very specific result set.  Category numbers and names can be found in the [Podcast Namespace documentation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/categories.json)
     * @param {string} [notcat] Use this argument to specify categories of episodes to **NOT** show in the results.  Separate multiple categories with commas.  You may specify either the Category ID and/or the Category Name.  Values are not case sensitive.  The &#x60;cat&#x60; and &#x60;notcat&#x60; filters can be used together to fine tune a very specific result set.  Category numbers and names can be found in the [Podcast Namespace documentation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/categories.json)
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    podcaststrending(max?: number, since?: number, lang?: string, cat?: string, notcat?: string, pretty?: boolean): Promise<InlineResponse2006> {
        return this.get(`/podcasts/trending`, { max, since, lang, cat, notcat, pretty });
    }
    /**
     * This call returns the most recent `max` number of episodes globally across the whole index, in reverse chronological order.  Example: https://api.podcastindex.org/api/1.0/recent/episodes?max=7&pretty
     * @summary Episodes
     * @param {number} [max] Maximum number of results to return.
     * @param {string} [excludeString] Any item containing this string will be discarded from the result set.  This may, in certain cases, reduce your set size below your &#x60;max&#x60; value.  Matches against the &#x60;title&#x60; and URL properties.
     * @param {number} [before] If you pass a PodcastIndex Episode ID, you will get recent episodes before that ID, allowing you to walk back through the episode history sequentially.
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    recentepisodes(max?: number, excludeString?: string, before?: number, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse20013> {
        return this.get(`/recent/episodes`, { max, excludeString, before, fulltext, pretty });
    }
    /**
     * This call returns the most recent `max` feeds, in reverse chronological order.  Examples:    - https://api.podcastindex.org/api/1.0/recent/feeds?pretty   - https://api.podcastindex.org/api/1.0/recent/feeds?max=20&cat=102,health&lang=de,ja&pretty
     * @summary Feeds
     * @param {number} [max] Maximum number of results to return.
     * @param {number} [since] Return items since the specified time. The value can be a unix epoch timestamp or a negative integer that represents a number of seconds prior to right now.
     * @param {string} [lang] Specifying a language code (like \&quot;en\&quot;) will return only episodes having that specific language.  You can specify multiple languages by separating them with commas.  If you also want to return episodes that have no language given, use the token \&quot;unknown\&quot;. (ex. en,es,ja,unknown).  Values are not case sensitive.
     * @param {string} [cat] Use this argument to specify that you **ONLY** want episodes with these categories in the results.  Separate multiple categories with commas.  You may specify either the Category ID and/or the Category Name.  Values are not case sensitive.  The &#x60;cat&#x60; and &#x60;notcat&#x60; filters can be used together to fine tune a very specific result set.  Category numbers and names can be found in the [Podcast Namespace documentation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/categories.json)
     * @param {string} [notcat] Use this argument to specify categories of episodes to **NOT** show in the results.  Separate multiple categories with commas.  You may specify either the Category ID and/or the Category Name.  Values are not case sensitive.  The &#x60;cat&#x60; and &#x60;notcat&#x60; filters can be used together to fine tune a very specific result set.  Category numbers and names can be found in the [Podcast Namespace documentation](https://github.com/Podcastindex-org/podcast-namespace/blob/main/categories.json)
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    recentfeeds(max?: number, since?: number, lang?: string, cat?: string, notcat?: string, pretty?: boolean): Promise<InlineResponse20014> {
        return this.get(`/recent/feeds`, { max, since, lang, cat, notcat, pretty });
    }
    /**
     * This call returns every new feed added to the index over the past 24 hours in reverse chronological order.  Examples:    - https://api.podcastindex.org/api/1.0/recent/newfeeds?pretty   - https://api.podcastindex.org/api/1.0/recent/newfeeds?pretty&since=1613805000
     * @summary New Feeds
     * @param {number} [max] Maximum number of results to return.
     * @param {number} [since] Return items since the specified time. The value can be a unix epoch timestamp or a negative integer that represents a number of seconds prior to right now.
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    recentnewfeeds(max?: number, since?: number, pretty?: boolean): Promise<InlineResponse20015> {
        return this.get(`/recent/newfeeds`, { max, since, pretty });
    }
    /**
     * This call returns the most recent `max` soundbites that the index has discovered.  A soundbite consists of an enclosure url, a start time and a duration. It is documented in the [podcast namespace](https://podcastindex.org/namespace/1.0#soundbite).  Example: https://api.podcastindex.org/api/1.0/recent/soundbites?pretty
     * @summary Soundbites
     * @param {number} [max] Maximum number of soundbites to return.
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    recentsoundbites(max?: number, pretty?: boolean): Promise<InlineResponse20016> {
        return this.get(`/recent/soundbites`, { max, pretty });
    }
    /**
     * This call returns all of the episodes where the specified person is mentioned.  Examples:    - https://api.podcastindex.org/api/1.0/search/byperson?q=adam%20curry&pretty   - https://api.podcastindex.org/api/1.0/search/byperson?q=Martin+Mouritzen&pretty   - https://api.podcastindex.org/api/1.0/search/byperson?q=Klaus+Schwab&pretty
     * @summary Search Episodes by Person
     * @param {string} q Person search for
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    searchbyperson(q: string, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse2001> {
        // verify required parameter 'q' is not null or undefined
        if (!q) {
            throw new UserInputError('Required parameter q was null or undefined when calling searchbyperson.');
        }
        return this.get(`/search/byperson`, { q, fulltext, pretty });
    }
    /**
     * This call returns all of the feeds that match the search terms in the `title`, `author` or `owner` of the feed.  This is ordered by the last-released episode, with the latest at the top of the results.  Example: https://api.podcastindex.org/api/1.0/search/byterm?q=batman+university&pretty
     * @summary Search Podcasts
     * @param {string} q Terms to search for
     * @param {string} [val] Only returns feeds with a &#x60;value&#x60; block of the specified type. Use &#x60;any&#x60; to return feeds with any &#x60;value&#x60; block.
     * @param {boolean} [clean] If present, only non-explicit feeds will be returned. Meaning, feeds where the &#x60;itunes:explicit&#x60; flag is set to &#x60;false&#x60;.  Parameter shall not have a value
     * @param {boolean} [fulltext] If present, return the full text value of any text fields (ex: &#x60;description&#x60;). If not provided, field value is truncated to 100 words.  Parameter shall not have a value
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    searchbyterm(q: string, val?: string, clean?: boolean, fulltext?: boolean, pretty?: boolean): Promise<InlineResponse200> {
        // verify required parameter 'q' is not null or undefined
        if (!q) {
            throw new UserInputError('Required parameter q was null or undefined when calling searchbyterm.');
        }
        return this.get(`/search/byterm`, { q, val, clean, fulltext, pretty });
    }
    /**
     * Return the most recent index statistics.  Example: https://api.podcastindex.org/api/1.0/stats/current?pretty
     * @summary Current
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    statscurrent(pretty?: boolean): Promise<InlineResponse20019> {
        return this.get(`/stats/current`, { pretty });
    }
    /**
     * This call returns the information for supporting the podcast via one of the \"Value for Value\" methods from the PodcastIndex ID.  Examples:    - https://api.podcastindex.org/api/1.0/value/byfeedid?id=920666&pretty   - https://api.podcastindex.org/api/1.0/value/byfeedid?id=779873&pretty
     * @summary By Feed ID
     * @param {number} id The PodcastIndex Feed ID to search for.
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    valuebyfeedid(id: number, pretty?: boolean): Promise<InlineResponse20017> {
        // verify required parameter 'id' is not null or undefined
        if (!id) {
            throw new UserInputError('Required parameter id was null or undefined when calling valuebyfeedid.');
        }
        return this.get(`/value/byfeedid`, { id, pretty });
    }
    /**
     * This call returns the information for supporting the podcast via one of the \"Value for Value\" methods from feed URL.  Examples:    - https://api.podcastindex.org/api/1.0/value/byfeedurl?url=https://mp3s.nashownotes.com/pc20rss.xml&pretty   - https://api.podcastindex.org/api/1.0/value/byfeedurl?url=https://lespoesiesdheloise.fr/@heloise/feed.xml&pretty
     * @summary By Feed URL
     * @param {string} url Podcast feed URL
     * @param {boolean} [pretty] If present, makes the output “pretty” to help with debugging.  Parameter shall not have a value
     * @param {*} [options] Override http request option.
     * @throws {UserInputError}
     */
    valuebyfeedurl(url: string, pretty?: boolean): Promise<InlineResponse20018> {
        // verify required parameter 'url' is not null or undefined
        if (!url) {
            throw new UserInputError('Required parameter url was null or undefined when calling valuebyfeedurl.');
        }
        return this.get(`/value/byfeedurl`, { url, pretty });
    }
};

