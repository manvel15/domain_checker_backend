import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'domains' })
export class DomainEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'boolean', default: false })
  valid: boolean;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  expire: Date;
}
