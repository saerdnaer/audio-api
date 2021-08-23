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
* Soundbite for episode 
*/
export class Soundbite {
    /**
    * The time where the soundbite begins in the item specified by the `enclosureUrl` 
    */
    'startTime'?: number;
    /**
    * The length to play the item specified by the `enclosureUrl` 
    */
    'duration'?: number;
    /**
    * Name of the soundbite 
    */
    'title'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "number"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Soundbite.attributeTypeMap;
    }
}
