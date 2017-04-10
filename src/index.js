import { setNasaApiKey } from './config';

const APOD = require('./apod')();
const Earth = require('./earth')();
const EONET = require('./eonet')();
const MarsPhotos = require('./mars-photos')();
const NEO = require('./neo')();
const Patents = require('./patents')();

export {
  APOD,
  Earth,
  EONET,
  MarsPhotos,
  NEO,
  Patents,
  setNasaApiKey,
};
