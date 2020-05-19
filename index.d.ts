
declare module "img-api" {
  const version: string;
  export { version };

  export class Client {
    public constructor(options?: { port?: number, host?: string, password?: string });

    public ping(): Promise<any>;
    public stats(): Promise<any>;

    public religion(avatar: string): Promise<Buffer>;
    public beautiful(avatar: string): Promise<Buffer>;
    public fear(avatar: string): Promise<Buffer>;
    public sacred(avatar: string): Promise<Buffer>;
    public painting(avatar: string): Promise<Buffer>;
    public color(color: string): Promise<Buffer>;
    public delete(avatar: string): Promise<Buffer>;
    public garbage(avatar: string): Promise<Buffer>;
    public tom(avatar: string): Promise<Buffer>;
    public bed(avatar: string, target: string): Promise<Buffer>;
    public crush(avatar: string, target: string): Promise<Buffer>;
    public patrick(avatar: string): Promise<Buffer>;
    public respect(avatar: string): Promise<Buffer>;
    public dipshit(text: string): Promise<Buffer>;
    public picture(avatar: string): Promise<Buffer>;
    public tweet(text: string): Promise<Buffer>;
    public truth(avatar: string): Promise<Buffer>;
    public bobross(avatar: string): Promise<Buffer>;
    public mask(avatar: string): Promise<Buffer>;
    public father(avatar: string, text: string): Promise<Buffer>;
    public achievement(avatar: string, text: string): Promise<Buffer>;
  }
}
