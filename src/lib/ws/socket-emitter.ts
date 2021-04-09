import { EventEmitter } from "events"

import {
  Category,
  DiscoverableGuild,
  FireStats,
  IdentifyResponse,
  Notification,
  Reminder,
  ResumeResponse,
} from "@/interfaces/aether"

interface EmitterEvents {
  IDENTIFY_CLIENT: (response: IdentifyResponse) => void
  RESUME_CLIENT: (response: ResumeResponse) => void
  REALTIME_STATS: (stats: FireStats) => void
  SUBSCRIBE: (route: string, extra?: unknown) => void
  HELLO: (hello: { interval: number }) => void
  COMMANDS_UPDATE: (categories: Category[]) => void
  DISCOVERY_UPDATE: (guilds: DiscoverableGuild[]) => void
  NOTIFICATION: (notification?: Notification) => void
  REMINDERS_UPDATE: (reminders: Reminder[]) => void
  CONFIG_UPDATE: (update: { name: string; value: unknown }) => void
}

export declare interface Emitter {
  on<T extends keyof EmitterEvents>(event: T, listener: EmitterEvents[T]): this
  emit<T extends keyof EmitterEvents>(event: T, ...args: Parameters<EmitterEvents[T]>): boolean
}

export class Emitter extends EventEmitter {}
