export function toVNTime(str: string): string {

    const time = new Date(str)
  return time.toLocaleString("vi-VN")
}