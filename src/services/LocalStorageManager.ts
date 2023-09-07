class LocalStorageManager {
  static getItem(key: string): any {
    const data = localStorage.getItem(key);

    if (data) return JSON.parse(data);

    return data;
  }

  static setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}

export default LocalStorageManager;
