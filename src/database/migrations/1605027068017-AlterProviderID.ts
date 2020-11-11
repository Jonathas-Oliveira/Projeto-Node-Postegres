import { TableColumn, MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export default class AlterProviderID1605027068017 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('appointments', new TableForeignKey({ // criando a key de relacionamento de tabelas
      name: 'appointmentskey',
      columnNames: ['providerID'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'appointmentskey')

    await queryRunner.dropColumn('appointments', 'providerID')

    await queryRunner.addColumn('appointments', new TableColumn({
      name: 'providerID',
      type: 'varchar'
    }))
  }
}
