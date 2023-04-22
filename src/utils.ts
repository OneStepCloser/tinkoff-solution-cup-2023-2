import {urlPrefix} from './constants';

export function getPath(url: string) {
    return urlPrefix + url;
}