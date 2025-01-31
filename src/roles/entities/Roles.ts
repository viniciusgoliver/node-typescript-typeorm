import {
    v4 as uudV4,
} from "uuid"
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
} from "typeorm"

@Entity('roles')
export class Role {
    @PrimaryColumn()
    id?: string

    @Column()
    name: string

    @CreateDateColumn({ name: 'created_at' })
    createdAd: Date

    constructor() {
        if (!this.id){
            this.id = uudV4()
        }
    }
}
