import {
  Controller,
  Get,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  copyFileSync,
  createReadStream,
  createWriteStream,
  writeFileSync,
} from 'fs';
import { join } from 'path';

import type { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class MainController {
  @Get('/file')
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': 'attachment; filename="package.json"',
    });
    return new StreamableFile(file);
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const destination = `uploads/${file.originalname}`;

    if (file.mimetype !== 'image/png') {
      return 'only images are allowed';
    }
    writeFileSync(destination, file.buffer);
    return 'uploaded';
  }
}
