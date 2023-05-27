import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'yjo6uubt3u5c16az.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        username: 'x5a6tkag2qag1bod',
        password: 'x6ys966ell7zgq58',
        database: 'miu4d918o6012lan',
        entities: [__dirname + '/../**/*.entity{.ts,.js}',],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];