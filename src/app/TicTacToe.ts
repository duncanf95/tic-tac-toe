import { Database, Player } from "./Util";

export class TicTacToe {
    private database: Database = new Database()
    public HelloWorld(): String {
        return "hello world"
    }

    public CreatePlayer(name: String, color: String): Player {
        const player = this.database.Create(name, color)
        return player
    }

    public GetPlayers(): Player[] {
        const players = this.database.GetAllPlayers()
        return players
    }

    public GetPlayer(name: String): Player | null {
        const player = this.database.GetPlayer(name)
        return player
    }

    public UpdateScore(name: String): Player {
        const player = this.database.UpdateScore(name)
        return player
    }

    public Clear(): boolean {
        return this.database.Clear()
    }
}