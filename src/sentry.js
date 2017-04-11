import Q from 'q';
import { sendRequest } from './util';

export default function sentry(): object {
  return {

    fetch(options: object = {}): undefined {
      const deferred = Q.defer();
      sendRequest('https://ssd-api.jpl.nasa.gov/sentry.api',
        options,
        (err: string, data: object): undefined => {
          if (err) return deferred.reject(err);
          return deferred.resolve(data);
        },
        true
      );
      return deferred.promise;
    },

  };
}
