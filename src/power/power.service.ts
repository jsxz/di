import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPoewr(number: number) {
    console.log("supply power:",number)
      return number;
  }
}
