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

/**
* An array statistic properties 
*/
export class Stats {
    /**
    * Total podcast feeds in the index.
    */
    'feedCountTotal'?: number;
    /**
    * Total individual podcast episodes in the index.
    */
    'episodeCountTotal'?: number;
    /**
    * Podcast feeds with a new episode released in the last 3 days.
    */
    'feedsWithNewEpisodes3days'?: number;
    /**
    * Podcast feeds with a new episode released in the last 10 days.
    */
    'feedsWithNewEpisodes10days'?: number;
    /**
    * Podcast feeds with a new episode released in the last 30 days.
    */
    'feedsWithNewEpisodes30days'?: number;
    /**
    * Podcast feeds with a new episode released in the last 90 days.
    */
    'feedsWithNewEpisodes90days'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feedCountTotal",
            "baseName": "feedCountTotal",
            "type": "number"
        },
        {
            "name": "episodeCountTotal",
            "baseName": "episodeCountTotal",
            "type": "number"
        },
        {
            "name": "feedsWithNewEpisodes3days",
            "baseName": "feedsWithNewEpisodes3days",
            "type": "number"
        },
        {
            "name": "feedsWithNewEpisodes10days",
            "baseName": "feedsWithNewEpisodes10days",
            "type": "number"
        },
        {
            "name": "feedsWithNewEpisodes30days",
            "baseName": "feedsWithNewEpisodes30days",
            "type": "number"
        },
        {
            "name": "feedsWithNewEpisodes90days",
            "baseName": "feedsWithNewEpisodes90days",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Stats.attributeTypeMap;
    }
}
