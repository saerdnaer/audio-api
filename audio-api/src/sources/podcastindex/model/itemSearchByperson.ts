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

import { RequestFile } from './models';
import { EpisodeType } from './episodeType';
import { Explicit } from './explicit';

export class ItemSearchByperson {
    /**
    * The internal PodcastIndex.org episode ID. 
    */
    'id'?: number;
    /**
    * Name of the feed 
    */
    'title'?: string;
    /**
    * The channel-level link in the feed 
    */
    'link'?: string;
    /**
    * The item-level description of the episode 
    */
    'description'?: string;
    /**
    * The unique identifier for the episode 
    */
    'guid'?: string;
    /**
    * The date and time the episode was published 
    */
    'datePublished'?: number;
    /**
    * The time this episode was found in the feed 
    */
    'dateCrawled'?: number;
    /**
    * URL/link to the episode file 
    */
    'enclosureUrl'?: string;
    /**
    * The Content-Type for the item specified by the `enclosureUrl` 
    */
    'enclosureType'?: string;
    /**
    * The length of the item specified by the `enclosureUrl` in bytes 
    */
    'enclosureLength'?: number;
    /**
    * The estimated length of the item specified by the `enclosureUrl` in minutes 
    */
    'duration'?: number;
    'explicit'?: Explicit;
    /**
    * Episode number 
    */
    'episode'?: number;
    'episodeType'?: EpisodeType;
    /**
    * Season number 
    */
    'season'?: number;
    /**
    * The item-level image for the episode 
    */
    'image'?: string;
    /**
    * The iTunes ID of this feed if there is one, and we know what it is. 
    */
    'feedItunesId'?: number;
    /**
    * The channel-level image element. 
    */
    'feedImage'?: string;
    /**
    * The internal PodcastIndex.org Feed ID. 
    */
    'feedId'?: number;
    /**
    * Current feed URL 
    */
    'feedUrl'?: string;
    /**
    * The channel-level author element.  Usually iTunes specific, but could be from another namespace if not present. 
    */
    'feedAuthor'?: string;
    /**
    * Name of the feed 
    */
    'feedTitle'?: string;
    /**
    * The channel-level language specification of the feed. Languages accord with the [RSS Language Spec](https://www.rssboard.org/rss-language-codes). 
    */
    'feedLanguage'?: string;
    /**
    * Link to the JSON file containing the episode chapters 
    */
    'chaptersUrl'?: string;
    /**
    * Link to the file containing the episode transcript 
    */
    'transcriptUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "datePublished",
            "baseName": "datePublished",
            "type": "number"
        },
        {
            "name": "dateCrawled",
            "baseName": "dateCrawled",
            "type": "number"
        },
        {
            "name": "enclosureUrl",
            "baseName": "enclosureUrl",
            "type": "string"
        },
        {
            "name": "enclosureType",
            "baseName": "enclosureType",
            "type": "string"
        },
        {
            "name": "enclosureLength",
            "baseName": "enclosureLength",
            "type": "number"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "explicit",
            "baseName": "explicit",
            "type": "Explicit"
        },
        {
            "name": "episode",
            "baseName": "episode",
            "type": "number"
        },
        {
            "name": "episodeType",
            "baseName": "episodeType",
            "type": "EpisodeType"
        },
        {
            "name": "season",
            "baseName": "season",
            "type": "number"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "feedItunesId",
            "baseName": "feedItunesId",
            "type": "number"
        },
        {
            "name": "feedImage",
            "baseName": "feedImage",
            "type": "string"
        },
        {
            "name": "feedId",
            "baseName": "feedId",
            "type": "number"
        },
        {
            "name": "feedUrl",
            "baseName": "feedUrl",
            "type": "string"
        },
        {
            "name": "feedAuthor",
            "baseName": "feedAuthor",
            "type": "string"
        },
        {
            "name": "feedTitle",
            "baseName": "feedTitle",
            "type": "string"
        },
        {
            "name": "feedLanguage",
            "baseName": "feedLanguage",
            "type": "string"
        },
        {
            "name": "chaptersUrl",
            "baseName": "chaptersUrl",
            "type": "string"
        },
        {
            "name": "transcriptUrl",
            "baseName": "transcriptUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ItemSearchByperson.attributeTypeMap;
    }
}

