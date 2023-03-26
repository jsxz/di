import { Controller, Get, Injectable } from "@nestjs/common";
import { CpuService } from "../cpu/cpu.service";
import { DiskService } from "../disk/disk.service";
@Injectable()
@Controller("computer")
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private distService: DiskService
  ) {
  }

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.distService.getData()];
  }
}
