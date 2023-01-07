import { Entity, Column, Index } from "typeorm";
import BaseEntity from "./Entity";

@Entity("tokens")
export default class Token extends BaseEntity {
  @Column({ unique: true })
  assessToken: string;

  @Index()
  @Column({ unique: true })
  accountId: number;

  @Column()
  expiresIn: number;

  @Column()
  isDeleted: boolean;
}
