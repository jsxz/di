import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from "../power/power.module";
import { DiskModule } from "../disk/disk.module";

@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports:[CpuService]
})
export class CpuModule {}
