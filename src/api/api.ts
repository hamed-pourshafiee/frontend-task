// Implementation code where T is the returned data shape
export default class Api {
  static async fetch<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json() as Promise<T>;
    return data;
  }
}
