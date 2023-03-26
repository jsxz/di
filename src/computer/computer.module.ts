import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from "../cpu/cpu.module";
import { PowerModule } from "../power/power.module";
import { DiskModule } from "../disk/disk.module";

@Module({
  imports:[CpuModule, DiskModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
