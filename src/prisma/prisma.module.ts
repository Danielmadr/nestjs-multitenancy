import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
@Global() //Garante uma conexão apenas com o BD e não varias
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
