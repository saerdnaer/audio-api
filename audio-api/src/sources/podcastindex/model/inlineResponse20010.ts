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
import { ItemPodcast } from './itemPodcast';
import { Status } from './status';

export class InlineResponse20010 {
    'status'?: Status;
    /**
    * List of episodes matching request 
    */
    'items'?: Array<ItemPodcast>;
    /**
    * Number of items returned in request 
    */
    'count'?: number;
    /**
    * Value passed to request in the `id` field 
    */
    'query'?: string;
    /**
    * Description of the response 
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "Status"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ItemPodcast>"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20010.attributeTypeMap;
    }
}
