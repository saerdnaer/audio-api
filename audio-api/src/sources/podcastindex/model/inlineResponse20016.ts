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
import { Status } from './status';

export class InlineResponse20016 {
    'status'?: Status;
    /**
    * List of soundbites matching request 
    */
    'items'?: Array<object>;
    /**
    * Number of items returned in request 
    */
    'count'?: number;
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
            "type": "Array<object>"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20016.attributeTypeMap;
    }
}
