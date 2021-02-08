export type ShardStats = {
  id: number;
  wsPing: number;
  guilds: number;
  unavailableGuilds: number;
  status: number;
}

export type ClusterStats = {
  id: number;
  name: string;
  env: string;
  user: string;
  userId: string;
  started: string;
  uptime: string;
  cpu: number;
  ramBytes: number;
  pid: number;
  version: string;
  versions: string;
  guilds: number;
  unavailableGuilds: number;
  users: number;
  commands: number;
  events: number;
  restPing: number;
  shards: ShardStats[]
}

export type FireStats = {
  cpu: number;
  ramBytes: number;
  totalRamBytes: number;
  aetherStats?: {
    ramBytes: number;
    restLatency: number;
  };
  clusterCount: number;
  shardCount: number;
  guilds: number;
  users: number;
  events: number;
  clusters: ClusterStats[]
}

export type Command = {
  name: string;
  description: string;
  usage: string;
  aliases: string;
  category?: string;
}

export type CategoryFlag = {
  name: string;
  description: string;
  usage: string;
}

export type Category = {
  id: number;
  name: string;
  commands: Command[];
  flags?: CategoryFlag[];
  Note?: string;
}
