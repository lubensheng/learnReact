export type loginType = { username: string, password: string, remember?: boolean }
export type userInfo = {message: string, code: number, data: any}
export type menusType = {
  name: string,
  key: string,
  close: () => {}
}