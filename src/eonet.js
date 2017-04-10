import Q from 'q';
import { sendRequest } from './util';

export default function eonet(): object {
  return {

    events(options: object = {}): undefined {
      const deferred = Q.defer();
      let endpoint = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';
      if (options.eventId) endpoint = `${endpoint}/${options.eventId}`;
      sendRequest(endpoint,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    categories(options: object = {}): undefined {
      const deferred = Q.defer();
      let endpoint = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories';
      if (options.categoryId) endpoint = `${endpoint}/${options.categoryId}`;
      sendRequest(endpoint,
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    sources(): undefined {
      const deferred = Q.defer();
      sendRequest('https://eonet.sci.gsfc.nasa.gov/api/v2.1/sources',
        {},
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

    layers(options: object = {}): undefined {
      const deferred = Q.defer();
      let endpoint = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/layers';
      if (options.categoryId) endpoint = `${endpoint}/${options.categoryId}`;
      sendRequest(endpoint,
        {},
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        }
      );
      return deferred.promise;
    },

  };
}