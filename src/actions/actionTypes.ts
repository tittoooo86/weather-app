function createActionTypes(base: string, types: string[]) {
  const res: {[s: string]: string} = {};
  types.forEach((type) => (res[type] = `${base}/${type}`));
  return res;
}

export const APP = createActionTypes('APP', ['SET_STORE_STATE']);

export const WEATHER = createActionTypes('WEATHER', [
  'FETCH',
  'FETCH_SUCCESS',
  'FETCH_FAILURE',
]);

export default {
  app: APP,
  weather: WEATHER,
};
