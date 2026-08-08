const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path: string) {
  return /^https?:\/\//.test(path) ? path : `${basePath}${path}`;
}