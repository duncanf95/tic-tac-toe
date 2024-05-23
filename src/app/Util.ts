import { readFileSync, writeFileSync} from 'fs';
import express, { Request } from "express";


export interface Player {
    name: String
    color: String
    score: number
}

export interface PlayerPostRequest {
    name: String
    color: String
}

export interface PlayerPatchRequest {
    name: String
}

export class Database {
    private file_name: String = 'players.json'

    public Create(name: String, color: String): Player {
        const data = readFileSync(this.file_name.toString())
        const players: Player[] = JSON.parse(data.toString())

        const player: Player = {
            name: name,
            color: color,
            score: 0
        }

        players.push(player)

        writeFileSync(this.file_name.toString(), JSON.stringify(players))

        return player
    }

    public UpdateScore(name: String): Player {
        const data = readFileSync(this.file_name.toString())
        const players: Player[] = JSON.parse(data.toString())

        for(const player of players) {
            if(player.name == name) {
                player.score = player.score + 1
                writeFileSync(this.file_name.toString(), JSON.stringify(players))

                return player
            }
        }

        return {name: 'could not find player', color: '', score: 0}
    }

    public Clear(): boolean {
        writeFileSync(this.file_name.toString(), JSON.stringify([]))
        return true
    }

    public GetAllPlayers(): Player[] {
        const data = readFileSync(this.file_name.toString())
        const players: Player[] = JSON.parse(data.toString())
        return players
    }

    public GetPlayer(name: String): Player | null {
        const data = readFileSync(this.file_name.toString())
        const players: Player[] = JSON.parse(data.toString())

        for(const player of players) {
            if(player.name == name) {
                return player
            }
        }

        return null
    }
}

export function getDataFromPostRequest(request: Request): PlayerPostRequest[] {
    return request.body
}

export function getDataFromPatchRequest(request: Request): PlayerPatchRequest {
    return request.body
}