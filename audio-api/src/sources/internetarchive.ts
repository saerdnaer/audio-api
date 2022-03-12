import { AssetType, Item as AudioItem, ItemType, ShowType, ShowsConnection } from "../generated-types";
import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

import { DataSource } from "./interface";
// import InternetArchive from 'internetarchive-sdk-js';
import config from "../config";

/*
 * Docs: 
 *  - 
 *  - https://archive.org/services/docs/api/views_api.html
 *  - https://archive.org/help/rss.php
 * 
 * Libraries
 *  - https://github.com/mxwllstn/internetarchive-sdk-js
 */

export class InternetArchiveAPI extends RESTDataSource implements DataSource {
  // ia: InternetArchive;

  constructor() {
    super();
    this.baseURL = "https://archive.org/";
    // this.ia = new InternetArchive(process.env.IA_TOKEN || '', { testmode: true })

  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("User-Agent", `saerdnaer/audio-api (${config.branch || "local"})`);
  }

  async item(id: string): Promise<ItemResponse> {
    const response = await this.get(`metadata/${id}`);
    return response;
  }

  async search(term: string, options: any): Promise<SearchResponse> {
    const { fields, rows } = options || {};

    const response = await this.get(`advancedsearch.php`, {
      q: term,
      ...(fields && { 'fl[]': fields.replace(/ /g, '') }),
      rows: rows || 50,
      output: 'json',
      'sort[]': 'date desc'
    });
    return response;
  }



  formatItem(data: ItemResponse): ItemType {
    const { metadata, d1, dir, files } = data;
    const { identifier } = metadata;

    const url = (name: string) => `https://${d1}${dir}/${name}`;
    const downloadUrl = (name: string) => `https://archive.org/download/${identifier}/${name}`;
    
    const audios = files.filter(f => f.name.endsWith('.mp3')) as AudioFile[];

    const file = audios[0];
    return {
      __typename: "ItemType",
      nodeId: `ia:${identifier}`,
      guid: `ia:${identifier}`,
      isPublished: true,
      ...data.metadata,
      episodeNumber: +file.track! || undefined,
      publicationDate: file.mtime,
      duration: file.length,
      durationSeconds: +file.length,
      image: {
        // __typename: "ImageType",
        url: url(files[0].name)
      },
      audios: audios.map(f => (
        {
          __typename: "AssetType",
          title: f.title,
          mimeType: f.format && `audios/${f.format.split(' ').pop()?.toLowerCase()}`,
          url: downloadUrl(f.name),
          size: +f.size,
        } as AssetType
      )),
      files: files.map(f => ({
        ...f,
        mimeType: f.format, // TODO covert IA file format to mime type 
        url: downloadUrl(file.name),
        size: +f.size,
      })),
      link: `https://archive.org/details/${identifier}`,
      _raw: data,
    };
  }
  async episode(id: string): Promise<AudioItem> {
    const response = await this.item(id);
    return this.formatItem(response);
  }
  async episodes(args: any): Promise<AudioItem[]> {
    const response = await this.get("/search/episode", args);
    return response.data.map(this.formatItem);
  }

  formatCollection(p: any): ShowType {
    return {
      __typename: "ShowType",
      nodeId: `ia:${p.slug}`,
      ...p,
      image: {
        __typename: "ImageType",
        url: p.thumbImageURL,
        urls: [
        ]
      },
      episodes: {
        totalCount: p.episode_count,
      },
      feedUrls: [
        p.xmlURL
      ],
      link: p.htmlURL,
      meta: {
        generator: p.generator,
        stats: p.stats,
        url: p.url_fyyd,
        rank: p.rank,
        color: p.color,
        tcolor: p.tcolor,
      },
      _raw: p,
    };
  }

  async podcast({ id, slug }: any): Promise<ShowType> {
    const response = id
      ? await this.get(`podcast?podcast_id=${id}`)
      : await this.get(`podcast?podcast_slug=${slug}`);
    return this.formatCollection(response.data);
  }

  async podcasts(): Promise<ShowsConnection> {
    throw new Error("Method not implemented.");
  }
}


/* 
https://archive.org/services/docs/api/items.html#what-is-an-item
Archive.org is made up of “items”. An item is a logical “thing” that we represent on one web page on archive.org. An item can be considered as a group of files that deserve their own metadata. 
If the files in an item have separate metadata, the files should probably be in different items. 
An item can be a book, a song, an album, a dataset, a movie, an image or set of images, etc. 
Every item has an identifier that is unique across archive.org.
*/

export type ItemResponse = {
    created:           number;
    d1:                string;
    d2:                string;
    dir:               string;
    files:             File[];
    files_count:       number;
    item_last_updated: number;
    item_size:         number;
    metadata:          {
      identifier:  string;
      mediatype:   Mediatype;
      collection:  string[];
      creator:     string;
      date:        Date;
      description: string;
      language:    string;
      licenseurl:  string;
      scanner:     string;
      subject:     string[];
      title:       string;
      uploader:    string;
      publicdate:  Date;
      addeddate:   Date;
      curation:    string;
      year:        string;
    };
    reviews:           Review[];
    server:            string;
    uniq:              number;
    workable_servers:  string[];
}

export type File = {
    name:        string;
    source:      'original' | 'derivative' | 'metadata';
    mtime?:      string;
    size:        string;
    md5:         string;
    crc32?:      string;
    sha1?:       string;
    format:      Format | string;
    rotation?:   string;
    original?:   string;
    length?:     string;
    viruscheck?: string;
    title?:      string;
    creator?:    string;
    album?:      string;
    track?:      string;
    artist?:     string;
    license?:    string;
    bitrate?:    string;
    btih?:       string;
    summation?:  string;
}

export type AudioFile = File & {
  size:        string;
  format:      "VBR MP3" | "24bit Flac" | string;
  original?:   string;
  length:      string;
  title:       string;
  creator?:    string;
  album?:      string;
  track?:      string;
  artist?:     string;
  license?:    string;
  bitrate:     string;
  btih?:       string;
  summation?:  string;
}

export type Mediatype = 'audio' | 'collection' | 'data' | 'etree' | 'image' | 'movies' | 'software' | 'texts' | 'web';

export type Format =
  "Archive BitTorrent" |
  "Item Image" |
  "Item Tile" |
  "JPEG Thumb" |
  "Metadata" |
  "PNG" |
  "Spectrogram" |
  "24bit Flac" |
  "VBR MP3";


export type Review = {
    reviewtitle:       string;
    reviewbody:        string;
    stars:             string;
    reviewer:          string;
    reviewdate:        Date;
    createdate:        Date;
    reviewer_itemname: string;
}


/*
https://archive.org/services/docs/api/items.html#collections
Collections

All items must be part of a collection. A collection is simply an item with special characteristics. Besides an image file for the collection logo, files should never be uploaded directly to a collection item. 

Items can be assigned to a collection at the time of creation, or after the item has been created by modifying the collection element in an item’s metadata to contain the identifier for the given collection (i.e. ia metadata <identifier> -m collection:<collection-identifier>. Currently collections can only be created by archive.org staff. 
  Please contact info@archive.org if you need a collection.
*/

type SearchResponse = any;