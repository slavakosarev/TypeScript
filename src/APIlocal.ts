export const APIlocal = {
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, value: object) => window.localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: string) => window.localStorage.removeItem(key)
}
