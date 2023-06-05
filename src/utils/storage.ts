class LocalStorage {
  protected data: { [key: string]: { value: string; expiry: string } } = {};

  constructor() {
    this.loadData();
  }

  protected loadData(): void {
    const dataStr = localStorage.getItem("data");
    this.data = dataStr ? JSON.parse(dataStr) : {};
  }

  protected saveData(): void {
    localStorage.setItem("data", JSON.stringify(this.data));
  }

  public getItem(key: string): string | null {
    const item = this.data[key];

    if (!item) return null;

    const now = new Date();
    const expiryDate = new Date(item.expiry);

    if (now > expiryDate) {
      delete this.data[key];
      this.saveData();
      return null;
    }

    return item.value;
  }

  public setItem(key: string, value: string, ttl: number): void {
    const now = new Date();
    const expiryDate = new Date(now.getTime() + ttl * 3600000);

    const item = {
      value: value,
      expiry: expiryDate.toISOString()
    };

    this.data[key] = item;
    this.saveData();
  }

  public removeItem(key: string): void {
    delete this.data[key];
    this.saveData();
  }

  public clear(): void {
    this.data = {};
    this.saveData();
  }
}

export default LocalStorage;