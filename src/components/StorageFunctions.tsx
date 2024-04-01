
export function getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
}

export function setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}
// eslint-disable-next-line
export function removeItem(key: string): void {
    localStorage.removeItem(key);
}

export function setSession<T>(key: string, value: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSession<T>(key: string): T | null {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
}

export function endSession(key: string): void {
    sessionStorage.removeItem(key);
}