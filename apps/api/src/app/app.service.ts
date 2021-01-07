import { Injectable } from '@nestjs/common';
import { Message } from '@deploy-it-demo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
